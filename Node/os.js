const os=require('os');
//The OS module provides information about the computer's operating system.

console.log(os.arch());
//	Returns the operating system CPU architecture

//console.log(os.constants);
//Returns an object containing the operating system's constants for process signals, error cotes etc.

// console.log(os.cpus());
//Returns an array containing information about the computer's CPUs

console.log(os.endianness());
//Returns the endianness of the CPU

// console.log(os.EOL);
//Returns the end-of-line marker for the current operating system

console.log(os.freemem());
//	Returns the number of free memory of the system

console.log(os.hostname());
//Returns the hostname of the operating system

console.log(os.loadavg());
//Returns an array containing the load averages

//console.log(os.networkInterfaces());
//Returns the network interfaces that has a network address

console.log(os.platform());
//Returns information about the operating system's platform

console.log(os.release());
//Returns information about the operating system's release

console.log(os.tmpdir());
//Returns the operating system's default directory for temporary files

console.log(os.totalmem());
// Returns the number of total memory of the system

console.log(os.type());
//Returns the name of the operating system

console.log(os.uptime());
//Returns the uptime of the operating system, in seconds

console.log(os.userInfo());
// Returns information about the current user