import {PhoneNumberRegex} from "./PhoneNumberRegex";

let phoneNumberRegex = new PhoneNumberRegex();
let validPhoneNumber: string[] = ["(09)-(0123456789)","(89)-(0323456789)","(32)-(0325456789)"];
let invalidPhoneNumber: string[] = ["(a1)-(0123456789)","(89)-(2323456789)","32)-(0325456789)"];

for (const string of validPhoneNumber) {
    console.log(`PhoneNumber ${string} is valid: ${phoneNumberRegex.validate(string)}`);
}

for (const string of invalidPhoneNumber) {
    console.log(`PhoneNumber ${string} is valid: ${phoneNumberRegex.validate(string)}`);
}