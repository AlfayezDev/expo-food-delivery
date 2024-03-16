import { Link } from "expo-router";
import React from "react";
import { Text, View, ScrollView, Pressable, Dimensions } from "react-native";
import { Circle, G, Mask, Path, Svg } from "react-native-svg";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
export default function MoreScreen() {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
      <View
        style={{ width: SCREEN_WIDTH * 0.9 }}
        className="flex-row gap-2 mx-auto justify-center pb-5"
      >
        <Pressable className="bg-slate-200 rounded-lg px-3 py-2 flex-[0.5]">
          <View className="gap-1">
            <Text className="text-sm">Wallet</Text>
            <View className="flex-row items-start gap-1">
              <Text className="text-lg items-start">0</Text>
              <Text className="text-xs">SAR</Text>
            </View>
          </View>
          <View></View>
        </Pressable>
        <Pressable className="bg-slate-200 rounded-lg px-3 py-2 flex-[0.5]">
          <View className="gap-1">
            <Text className="text-sm">Jahez More</Text>
            <View className="flex-row items-start gap-1">
              <Text className="text-lg items-start">0</Text>
              <Text className="text-xs">Points</Text>
            </View>
          </View>
          <View></View>
        </Pressable>
      </View>
      {[...new Array(10).keys()].map((p) => (
        <Link asChild key={`more-item-${p}`} href={"#"}>
          <Pressable
            style={{
              width: SCREEN_WIDTH * 0.95,
            }}
            className="border flex-row items-center border-slate-200 mx-auto my-2 py-2 px-2 rounded-md"
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Circle cx="11.8064" cy="7" r="4.5" fill="#FF8300" />
              <Mask
                id="mask0_30457_447408"
                maskUnits="userSpaceOnUse"
                x="4"
                y="14"
                width="16"
                height="8"
              >
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 14.4961H19.8399V21.8701H4V14.4961Z"
                  fill="white"
                />
              </Mask>
              <G mask="url(#mask0_30457_447408)">
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9209 15.9961C7.65988 15.9961 5.49988 16.7281 5.49988 18.1731C5.49988 19.6311 7.65988 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.96188 21.8701 3.99988 21.8701 3.99988 18.1731C3.99988 14.8771 8.52088 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z"
                  fill="#FF0000"
                />
              </G>
              <Mask
                id="mask1_30457_447408"
                maskUnits="userSpaceOnUse"
                x="6"
                y="2"
                width="12"
                height="11"
              >
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.60986 2H17.2299V12.6186H6.60986V2Z"
                  fill="white"
                />
              </Mask>
              <G mask="url(#mask1_30457_447408)">
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9209 3.428C9.77989 3.428 8.03789 5.169 8.03789 7.31C8.03089 9.444 9.75989 11.184 11.8919 11.192L11.9209 11.906V11.192C14.0609 11.192 15.8019 9.45 15.8019 7.31C15.8019 5.169 14.0609 3.428 11.9209 3.428ZM11.9209 12.619H11.8889C8.9669 12.61 6.59989 10.227 6.60989 7.307C6.60989 4.382 8.99189 2 11.9209 2C14.8489 2 17.2299 4.382 17.2299 7.31C17.2299 10.238 14.8489 12.619 11.9209 12.619Z"
                  fill="#FF0000"
                />
              </G>
            </Svg>
            <Text>My Account</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}
