interface SketchfabSearchResultProps {
    uid : string;
    slug : string;
    name : string;
    staffpickedAt : Date | null;
    viewCount : number;
    likeCount : number;
    animationCount : number;
    viewerUrl : string;
    embedUrl : string;
    publicCommentCount : number;
    isDownloadable : boolean;
    downloadType : string;
    downloadCount : number;
    isPublished : boolean;
    isRestricted : boolean;
    publishedAt : Date;
    thumbnails : string[];
    user : any;
    price : null | number;
    averageRating : number;
    reviewCount : number;
    inStore : boolean;
    org : null;
    visibility : string;
}

interface SketchfabSearchResultsProps {
    results : SketchfabSearchResult[];
}

export class SketchfabSearchResult {

    private constructor(public readonly props: SketchfabSearchResultProps) {}

    public static create(props: SketchfabSearchResultProps): SketchfabSearchResult {
        return new SketchfabSearchResult(props);
    }
}

export class SketchfabSearchResults {
    private constructor(private props: SketchfabSearchResultsProps) {}

    public static create(props: SketchfabSearchResultsProps): SketchfabSearchResults {
        return new SketchfabSearchResults(props);
    }

    public getModelUids(): string[] {
        return this.props.results.map(result => result.props.uid);
    }
}