if ('connection' in navigator) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    console.log('Effective connection type:', connection.effectiveType);
    
    // Check for slow connections
    if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
    console.warn('You are on a slow connection');
    }
    
    // Listen for changes in connection
    connection.addEventListener('change', () => {
        console.log('Connection type changed to:', connection.effectiveType);
    });
} else {
    console.log('Network Information API is not supported by your browser.');
}