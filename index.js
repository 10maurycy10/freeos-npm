// Keep track of if the message was printed, we dint want to spam the users console
var message_printed = false;
var platform = process.platform;

modules.exports = () => {
	if (platform == "win32" || platform == "darwin" && !message_printed) {
		console.warn("This program runs optimally on a free and open source operating system, such as GNU/Linux.");
		console.warn("");
		console.warn("Consider switching for better performance, privacy, and security");
		if (platform == "win32") {
			console.warn("See https://www.fsf.org/windows/ and https://www.gnu.org/proprietary/malware-microsoft.html for more reasons");
		}
		if (platform == "darwin") {
			console.warn("See https://www.gnu.org/proprietary/malware-apple.html for more reasons");
		}
		console.warn("")
		console.warn("Linux Mint (https://linuxmint.com/) is generally recommend for beginners in Linux, because of its sane by default configuration and easy installation.");
		message_printed = true;
	}
}
