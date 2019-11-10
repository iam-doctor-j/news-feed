export class Post {
    private dateModified?: Date;
    constructor(private content?: string, private image?: string, private dateAdded?: Date) {}

    get Content() {
        return this.content;
    }

    get Image() {
        return this.image;
    }

    get DateAdded() {
        return this.dateAdded;
    }

    get DateModified() {
        return this.dateModified;
    }

    set Content(content) {
        this.content = content;
        this.setDate();
    }

    set Image(image) {
        this.image = image;
        this.setDate();
    }

    private setDate() {
        if(!this.dateAdded) {
            this.dateAdded = new Date();
        } else {
            this.dateModified = new Date();
        }
    }
}