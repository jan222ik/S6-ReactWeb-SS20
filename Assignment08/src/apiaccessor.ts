const GiphyAPI = {
    ENTRY_POINTS: {
        SEARCH: "https://api.giphy.com/v1/gifs/search",
        TRENDING: "https://api.giphy.com/v1/gifs/trending"
    },
    API_KEY: {
        PARAM: "api_key",
        KEY:
    },
    PAGINATION: {
        OFFSET: {
            PARAM: "offset"
        },
        LIMIT: {
            PARAM: "limit"
        }
    },
    SEARCH: {
        PARAM: "q"
    }
}

type ResponseData = { id: string, url: string, images: { fixed_height: { url: string } }, title: string }
type Response = { data: [], pagination: { total_count: number } }

const LIMIT = 12;

const urlOf = (...arr) => arr.join()
const buildParameter = (isFirstParam: boolean, param: string, value: string) => (isFirstParam ? "?" : "&") + param + '=' + value;
const ApiKeyAsParam = (isFirstParam: boolean = false) => buildParameter(isFirstParam, GiphyAPI.API_KEY.PARAM, GiphyAPI.API_KEY.KEY);
const QueryAsParam = (s: string, isFirstParam: boolean = false) => buildParameter(isFirstParam, GiphyAPI.SEARCH.PARAM, s);
const LimitAsParam = (limit: number, isFirstParam: boolean = false) => buildParameter(isFirstParam, GiphyAPI.PAGINATION.LIMIT.PARAM, limit.toString());
const OffsetAsParam = (offset: number, isFirstParam: boolean = false) => buildParameter(isFirstParam, GiphyAPI.PAGINATION.OFFSET.PARAM, offset.toString())

const querySearch = (queryString: string, page: number = 1) => {
    const offset = (page - 1) * LIMIT;
    return function (onFinishCallback: (Response) => void) {
        const url = urlOf(GiphyAPI.ENTRY_POINTS.SEARCH,
            QueryAsParam(queryString, true),
            ApiKeyAsParam(),
            OffsetAsParam(offset),
            LimitAsParam(LIMIT))
        fetch(url)
            .then((res) => res.json())
            .then(data => onFinishCallback(data))
    }
}

const queryTrending = (page: number = 0) => {
    const offset = (page - 1) * LIMIT;
    return function (onFinishCallback: (Response) => void) {
        const url = urlOf(GiphyAPI.ENTRY_POINTS.TRENDING,
            ApiKeyAsParam(true),
            OffsetAsParam(offset),
            LimitAsParam(LIMIT))
        fetch(url)
            .then((res) => res.json())
            .then(data => onFinishCallback(data))
    }
}

export {querySearch, queryTrending, ResponseData, LIMIT, Response}