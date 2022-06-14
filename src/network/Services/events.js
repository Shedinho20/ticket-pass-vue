import axios from 'axios';
import { EVENTS } from '../apiEndpoint';
import { axiosService, useAxiosPrivate } from '../Config/axios.service';

export const getEventsService = async currentPage => {
  const config = {
    method: 'get',
    url: `${EVENTS}?page=${currentPage}`
  };

  const response = await axiosService(config);

  return response;
};

export const getEventService = async id => {
  const config = {
    method: 'get',
    url: `${EVENTS}/${id}`
  };

  const response = await axiosService(config);

  return response;
};

export const useCreateEventService = () => {
  const axiosPrivate = useAxiosPrivate();

  const createEvent = async payload => {
    const data = new FormData();

    data.append('name', payload.name);
    data.append('description', payload.desc);
    data.append('startDate', payload.startDate);
    data.append('endDate', payload.endDate);
    data.append('image', payload.image);

    const config = {
      method: 'post',
      url: EVENTS,
      data
    };

    const response = await axiosPrivate(config);
    return response;
  };

  return createEvent;
};
