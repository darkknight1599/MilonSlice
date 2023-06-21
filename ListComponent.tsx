/* eslint-disable react-native/no-inline-styles */
import { FlatList, ImageBackground, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import {
    moderateScale,
    scale,
    verticalScale,
    vs,
} from 'react-native-size-matters';

const DealItem = ({ item, index }) => (
    <TouchableOpacity style={{marginVertical:10}}>
        <ImageBackground
            source={{ uri: item?.user.ig_uploaded_profile }}
            style={{
                height: verticalScale(180),
                alignItems: 'flex-end',
                marginHorizontal: scale(5),
                padding: scale(6),
                borderRadius: scale(20)

            }}
            imageStyle={{ height: verticalScale(180), resizeMode: "cover", borderRadius: scale(20) }}>

        </ImageBackground>
        <View
            style={{
                alignItems: 'flex-start',
                width: moderateScale(150),
                marginHorizontal: scale(8),
                height: verticalScale(60),
                justifyContent: 'space-between',
            }}>
            <View style={{ width: '70%' }}>
                <Text
                    numberOfLines={2}
                    style={{ fontSize: vs(15), color: '#000000', fontWeight: 'bold' }}>
                    {item?.user?.ig_name}
                </Text>
                <Text style={{ fontSize: vs(10), color: 'grey', fontWeight: 'bold', marginVertical: 5 }}>
                    {item?.user?.followers_range.range} Followers
                </Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text
                    style={{
                        fontSize: vs(13),
                        color: '#000000',
                        fontWeight: 'bold'
                    }}>
                    ${item?.user?.lowest_price}
                </Text>
                <TouchableOpacity style={{ backgroundColor: "#000000", borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }}>
                    <Text
                        style={{
                            fontSize: vs(13),
                            color: '#FFFFFF',
                            fontWeight: 'bold'
                        }}>
                        Add +
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
        {/* <TouchableOpacity
      style={{
        height: verticalScale(30),
        width: moderateScale(150),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: scale(8),
        padding: scale(5),
        backgroundColor: '#7FAA39',
        borderRadius: scale(10),
      }}>
      <Text
        font="bold"
        color={'white'}
        style={{fontSize: scale(13)}}>
        22:00:30 hr left
      </Text>
    </TouchableOpacity> */}
    </TouchableOpacity>
);


export const List = ({
    data
}) => (
    <View testID='list-item' style={{ marginVertical: verticalScale(10), alignItems: 'center' }}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={DealItem}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            ItemSeparatorComponent={
                <View
                    style={{
                        height: moderateScale(15),
                    }}
                />
            }
        />
    </View>
);
