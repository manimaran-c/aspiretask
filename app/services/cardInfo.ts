import {apiClient} from 'app/services/client';
import APIConfig from 'app/config/APIConfig';

export function getCardDetails() {
  return apiClient.get(APIConfig.CARDINFO);
}
