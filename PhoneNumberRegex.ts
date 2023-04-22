export class PhoneNumberRegex {
    private PHONE_NUMBER_REGEX: RegExp = /^\(\d{2}\)-\(0\d{9}\)$/
    validate(regex: string): boolean {
        return this.PHONE_NUMBER_REGEX.test(regex);
    }
}