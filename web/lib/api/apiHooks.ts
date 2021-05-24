import { useQuery, useMutation } from 'react-query';
import { useContext } from 'react';

import {
    ApiError,
    getHelpRequests,
    HelpRequest,
    createHelpRequest,
    sendHelpRequestContact,
    ContactInformation,
    getHelpRequestWithToken,
    updateHelpRequest,
    deleteHelpRequest
} from './rawApi';
import { PasswordContext } from '../context/PasswordContext';

export interface HelpRequestResponse {
    id: number;
    name: string;
    title: string;
    description?: string;
    createdAt: string;
}

export const getAllHelpRequestsKey = 'helpRequests';
export const getHelpRequestKey = 'helpRequest';

export const useHelpRequests = () => {
    const { password } = useContext(PasswordContext);
    return useQuery<HelpRequestResponse[]>(getAllHelpRequestsKey, async () =>
        getHelpRequests(password)
    );
};

export const useCreateHelpRequest = () => {
    const { password } = useContext(PasswordContext);
    return useMutation(async (helpRequest: HelpRequest) =>
        createHelpRequest(password, helpRequest)
    );
};

export const useSendHelpRequestContact = () => {
    const { password } = useContext(PasswordContext);
    return useMutation(
        async ({
            requestId,
            contactInformation
        }: {
            requestId: number;
            contactInformation: ContactInformation;
        }) => sendHelpRequestContact(password, requestId, contactInformation)
    );
};

export const useHelpRequestWithToken = (
    helpToken: string,
    requestId: number
) => {
    return useQuery<HelpRequestResponse>(
        [getHelpRequestKey, requestId],
        async () => getHelpRequestWithToken(helpToken, requestId),
        {
            retry: (failureCount, error) => {
                if (failureCount >= 3) {
                    return false;
                }
                if (error instanceof ApiError) {
                    return error.code !== 403 && error.code !== 404;
                }
                return true;
            }
        }
    );
};

export const useUpdateHelpRequest = (helpToken: string, requestId: number) => {
    return useMutation(
        async (editedHelpRequest: Pick<HelpRequest, 'title' | 'description'>) =>
            updateHelpRequest(helpToken, requestId, editedHelpRequest)
    );
};

export const useDeleteHelpRequest = (helpToken: string, requestId: number) => {
    return useMutation(async () => deleteHelpRequest(helpToken, requestId));
};
