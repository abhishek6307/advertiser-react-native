import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import api from '../api/api';

const AdList = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await api.get('/ads');
        setAds(response.data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchAds();
  }, []);

  return (
    <View>
      <Text>Advertiser Ads</Text>
      <FlatList
        data={ads}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Ad Spend: {item.ad_spend}</Text>
            <Text>Business Crypto Acquired: {item.business_crypto_acquired}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AdList;
