if (navigator.connection) {
    console.log(`Effective network type: ${navigator.connection.effectiveType}`);
    console.log(`Downlink Speed: ${navigator.connection.downlink}Mb/s`);
    console.log(`Round Trip Time: ${navigator.connection.rtt}ms`);
} else {
    console.log('Navigator Connection API not supported');
}