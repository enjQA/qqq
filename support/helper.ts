export default class Helper {
    public get randomString() {
        return Math.random().toString(36).substring(2,12).replace(/[0-9]/g, '')
    }
}