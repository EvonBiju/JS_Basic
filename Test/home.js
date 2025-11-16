// Add this code to your existing DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Your existing code...
    
    // Profile dropdown functionality
    const profileButton = document.querySelector('.profile-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (profileButton) {
        profileButton.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            }
        });
        
        // Prevent dropdown from closing when clicking inside it
        dropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Keep the existing user data fetch and name update
    fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            if (!data.success) {
                window.location.href = '/login';
                return;
            }
            
            // Update profile name in dropdown
            const userNameElement = document.getElementById('userName');
            if (userNameElement && data.user) {
                userNameElement.textContent = data.user.fullname;
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            window.location.href = '/login';
        });
        
    // Keep your existing logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            fetch('/api/logout', {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/login';
                }
            })
            .catch(error => {
                console.error('Logout error:', error);
            });
        });
    }
    
    // Your other existing code...
});