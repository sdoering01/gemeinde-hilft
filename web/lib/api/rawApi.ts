interface ApiCallOptions {
    method?: string;
    body?: any;
    password?: string;
    helpToken?: string;
}

interface ApiCallHeaders {
    Authorization?: string;
    'X-Help-Token'?: string;
    'Content-Type'?: string;
    [key: string]: string;
}

export interface HelpRequest {
    email: string;
    name?: string;
    title: string;
    description?: string;
}

export interface ContactInformation {
    name: string;
    email?: string;
    phone?: string;
    additionalInformation?: string;
}

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export class ApiError extends Error {
    constructor(message: string, public code: number) {
        super(message);
    }
}

const makeApiCall = async (
    relativeUrl: string,
    { method = 'GET', body, password, helpToken }: ApiCallOptions
) => {
    let headers: ApiCallHeaders = {
        'Content-Type': 'application/json'
    };
    if (password) {
        headers.Authorization = `Password ${password}`;
    }
    if (helpToken) {
        headers['X-Help-Token'] = helpToken;
    }

    let response: Response;
    try {
        response = await fetch(`${apiBaseUrl}${relativeUrl}`, {
            method,
            body,
            headers
        });
    } catch (e) {
        throw Error('Server ist nicht erreichbar');
    }

    if (!response.ok) {
        const errorText = await response.text();
        throw new ApiError(errorText, response.status);
    }

    return response;
};

export const checkPasswordCall = (password: string) => {
    return makeApiCall('/checkPassword', { method: 'POST', password });
};

export const getHelpRequests = async (password: string) => {
    return (await makeApiCall('/help/requests', { password })).json();
};

export const createHelpRequest = async (
    password: string,
    helpRequest: HelpRequest
) => {
    return makeApiCall('/help/requests', {
        method: 'POST',
        password,
        body: JSON.stringify(helpRequest)
    });
};

export const sendHelpRequestContact = async (
    password: string,
    requestId: number,
    contactInformation: ContactInformation
) => {
    return makeApiCall(`/help/requests/${requestId}/contact`, {
        method: 'POST',
        password,
        body: JSON.stringify(contactInformation)
    });
};

export const getHelpRequestWithToken = async (
    helpToken: string,
    requestId: number
) => {
    return (
        await makeApiCall(`/help/requests/${requestId}`, {
            method: 'GET',
            helpToken
        })
    ).json();
};

export const updateHelpRequest = async (
    helpToken: string,
    requestId: number,
    editedHelpRequest: Pick<HelpRequest, 'title' | 'description'>
) => {
    makeApiCall(`/help/requests/${requestId}`, {
        method: 'PATCH',
        helpToken,
        body: JSON.stringify(editedHelpRequest)
    });
};

export const deleteHelpRequest = async (
    helpToken: string,
    requestId: number
) => {
    makeApiCall(`/help/requests/${requestId}`, {
        method: 'DELETE',
        helpToken
    });
};
