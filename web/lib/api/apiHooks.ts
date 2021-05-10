import { useQuery, useMutation } from 'react-query';
import { useContext } from 'react';

import { getHelpRequests, HelpRequest, createHelpRequest } from './rawApi';
import { PasswordContext } from '../context/PasswordContext';

export interface HelpRequestResponse {
    id: number;
    name: string;
    title: string;
    description?: string;
    createdAt: string;
}

export const getAllHelpRequestsKey = 'helpRequests';

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
