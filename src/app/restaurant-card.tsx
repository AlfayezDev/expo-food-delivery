import { Link, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Dimensions, Pressable } from "react-native";

import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { useAssets } from "expo-asset";
import { Image } from "expo-image";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
function RestaurantCard() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const [assets] = useAssets([require("../../public/star.png")]);
  useEffect(() => {
    navigation.setOptions({
      title: "manoosha - ❤️",
      headerSearchBarOptions: {
        onChangeText: (event) => setSearch(event.nativeEvent.text),
        placeholder: "Search",
        obscureBackground: false,
        hideNavigationBar: true,
        hideWhenScrolling: false,
        tintColor: "black",
        barTintColor: "white",
      },
    });
  }, []);
  return (
    <FlatList
      data={[...new Array(10).keys()]}
      ListHeaderComponentStyle={{ paddingBottom: 10 }}
      contentContainerStyle={{ paddingTop: 10, gap: 10 }}
      ListHeaderComponent={(p) => (
        <View className="gap-2">
          <View className="flex-row gap-3 px-2">
            <View className="bg-slate-200 rounded-lg  h-20 w-20 flex-[0.2] items-center justify-center">
              <Text className="text-slate-400">{p.item}</Text>
            </View>
            <View className="gap-2 flex-[0.6]">
              <View className="flex-row items-center gap-1">
                <Text className="text-slate-800">Bread & Crumbs</Text>
                <Image
                  source={assets?.[0]}
                  style={{ height: 12, width: 12 }}
                  className="h-5 w-5"
                />
              </View>
              <Text className="text-sm text-slate-500">Breakfast</Text>
              <View className="bg-[#EDE6F4] flex-row gap-2 w-[78]  rounded-lg items-center justify-center">
                <Svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                  <G clip-path="url(#clip0_42729_14575)">
                    <Path
                      d="M2.74121 4.9585C2.77793 4.81162 2.82077 4.65557 2.86973 4.49033C2.91869 4.3251 2.96917 4.1721 3.02119 4.03135C3.07627 3.88753 3.12676 3.77738 3.17266 3.70088C3.23385 3.5846 3.30576 3.50046 3.38838 3.44844C3.471 3.39642 3.57809 3.3597 3.70967 3.33828C3.86572 3.31686 4.13193 3.30003 4.5083 3.28779C4.88773 3.27555 5.38496 3.26943 6 3.26943C6.61198 3.26943 7.10768 3.27555 7.48711 3.28779C7.86654 3.30003 8.13428 3.31686 8.29033 3.33828C8.42191 3.3597 8.529 3.39642 8.61162 3.44844C8.69424 3.50046 8.76615 3.5846 8.82734 3.70088C8.87018 3.77738 8.91761 3.88753 8.96963 4.03135C9.02471 4.1721 9.07673 4.3251 9.12568 4.49033C9.1777 4.65557 9.22054 4.81162 9.2542 4.9585C9.27562 5.05029 9.26644 5.11761 9.22666 5.16045C9.18994 5.20329 9.12262 5.22318 9.02471 5.22012C8.79827 5.20482 8.54583 5.19105 8.26738 5.17881C7.98893 5.16351 7.66611 5.1528 7.29893 5.14668C6.93174 5.1375 6.49876 5.13291 6 5.13291C5.50124 5.13291 5.06826 5.1375 4.70107 5.14668C4.33389 5.1528 4.01107 5.16351 3.73262 5.17881C3.45723 5.19105 3.20632 5.20482 2.97988 5.22012C2.87891 5.22318 2.80853 5.20329 2.76875 5.16045C2.72897 5.11761 2.71979 5.05029 2.74121 4.9585ZM2.68154 8.17598C2.46123 8.17598 2.27764 8.10254 2.13076 7.95566C1.98389 7.80879 1.91045 7.62673 1.91045 7.40947C1.91045 7.18916 1.98389 7.0071 2.13076 6.86328C2.27764 6.71641 2.46123 6.64297 2.68154 6.64297C2.8988 6.64297 3.08086 6.71641 3.22773 6.86328C3.37461 7.0071 3.44805 7.18916 3.44805 7.40947C3.44805 7.62673 3.37461 7.80879 3.22773 7.95566C3.08086 8.10254 2.8988 8.17598 2.68154 8.17598ZM4.76074 7.9832C4.59551 7.9832 4.46087 7.93271 4.35684 7.83174C4.25586 7.7277 4.20537 7.59307 4.20537 7.42783C4.20537 7.26566 4.25586 7.13408 4.35684 7.03311C4.46087 6.92907 4.59551 6.87705 4.76074 6.87705H7.23926C7.40143 6.87705 7.53301 6.92907 7.63398 7.03311C7.73802 7.13408 7.79004 7.26566 7.79004 7.42783C7.79004 7.59307 7.73802 7.7277 7.63398 7.83174C7.53301 7.93271 7.40143 7.9832 7.23926 7.9832H4.76074ZM9.31846 8.17598C9.1012 8.17598 8.91914 8.10254 8.77227 7.95566C8.62845 7.80879 8.55654 7.62673 8.55654 7.40947C8.55654 7.18916 8.62845 7.0071 8.77227 6.86328C8.91914 6.71641 9.1012 6.64297 9.31846 6.64297C9.53877 6.64297 9.72083 6.71641 9.86465 6.86328C10.0115 7.0071 10.085 7.18916 10.085 7.40947C10.085 7.62673 10.0115 7.80879 9.86465 7.95566C9.72083 8.10254 9.53877 8.17598 9.31846 8.17598ZM6 9.50703C5.60833 9.50703 5.19525 9.50244 4.76074 9.49326C4.3293 9.48408 3.9055 9.47184 3.48936 9.45654C3.07627 9.43818 2.69684 9.41829 2.35107 9.39688C2.00531 9.37546 1.7238 9.35251 1.50654 9.32803C1.17607 9.28825 0.919043 9.17656 0.735449 8.99297C0.554916 8.80938 0.464649 8.55999 0.464649 8.24482V7.43701C0.464649 7.16774 0.483008 6.93213 0.519727 6.73018C0.556446 6.52822 0.616114 6.34004 0.698731 6.16563C0.784408 5.99121 0.899154 5.81068 1.04297 5.62402L1.44688 5.11455C1.50501 4.83916 1.57386 4.56683 1.65342 4.29756C1.73298 4.02829 1.811 3.78656 1.8875 3.57236C1.964 3.35817 2.02979 3.19447 2.08486 3.08125C2.21032 2.81198 2.39238 2.59626 2.63105 2.43408C2.86973 2.27191 3.14818 2.17093 3.46641 2.13115C3.5735 2.11891 3.74945 2.1082 3.99424 2.09902C4.23903 2.08678 4.53278 2.0776 4.87549 2.07148C5.2182 2.06536 5.59303 2.06231 6 2.06231C6.40391 2.06231 6.77721 2.06536 7.11992 2.07148C7.46569 2.0776 7.75944 2.08525 8.00117 2.09443C8.24596 2.10361 8.42344 2.11585 8.53359 2.13115C8.84876 2.17399 9.12568 2.2765 9.36436 2.43867C9.60609 2.59779 9.79121 2.81198 9.91973 3.08125C9.97174 3.19447 10.036 3.35817 10.1125 3.57236C10.1921 3.78656 10.2701 4.02829 10.3466 4.29756C10.4261 4.56683 10.4935 4.83916 10.5485 5.11455L10.957 5.62402C11.1008 5.81068 11.2156 5.99121 11.3013 6.16563C11.3869 6.34004 11.4466 6.52822 11.4803 6.73018C11.517 6.93213 11.5354 7.16774 11.5354 7.43701V8.24482C11.5354 8.55999 11.4451 8.80938 11.2646 8.99297C11.084 9.17656 10.827 9.28825 10.4935 9.32803C10.2762 9.35251 9.99469 9.37546 9.64893 9.39688C9.30316 9.41829 8.9222 9.43818 8.50605 9.45654C8.09297 9.47184 7.66917 9.48408 7.23467 9.49326C6.80322 9.50244 6.39167 9.50703 6 9.50703ZM6 8.77266C6.39473 8.77266 6.80169 8.76807 7.2209 8.75889C7.64316 8.74971 8.05166 8.73747 8.44639 8.72217C8.84417 8.70687 9.20218 8.69004 9.52041 8.67168C9.83864 8.65332 10.0911 8.6319 10.2777 8.60742C10.4736 8.586 10.6113 8.52633 10.6908 8.42842C10.7704 8.32744 10.8102 8.18822 10.8102 8.01074V7.40029C10.8102 7.19222 10.7964 7.01475 10.7688 6.86787C10.7413 6.721 10.6954 6.58483 10.6312 6.45938C10.5669 6.33086 10.4812 6.19622 10.3741 6.05547L9.87842 5.40371C9.84782 5.25072 9.80804 5.08089 9.75908 4.89424C9.71318 4.70758 9.66117 4.52246 9.60303 4.33887C9.54795 4.15221 9.49134 3.97933 9.4332 3.82022C9.37506 3.6611 9.32305 3.53105 9.27715 3.43008C9.19759 3.2679 9.0859 3.13939 8.94209 3.04453C8.80133 2.94967 8.62692 2.89001 8.41885 2.86553C8.32093 2.85023 8.15876 2.83646 7.93232 2.82422C7.70895 2.81198 7.43203 2.8028 7.10156 2.79668C6.77415 2.7875 6.40697 2.78291 6 2.78291C5.59609 2.78291 5.23044 2.7875 4.90303 2.79668C4.57562 2.8028 4.29717 2.81198 4.06768 2.82422C3.84124 2.83646 3.67601 2.85023 3.57197 2.86553C3.37002 2.89001 3.19714 2.94967 3.05332 3.04453C2.91257 3.13633 2.80394 3.26331 2.72744 3.42549C2.67848 3.52952 2.62494 3.6611 2.5668 3.82022C2.50866 3.97933 2.45052 4.15221 2.39238 4.33887C2.33424 4.52552 2.2807 4.71217 2.23174 4.89883C2.18584 5.08242 2.14912 5.25072 2.12158 5.40371L1.63047 6.05547C1.52031 6.19622 1.43311 6.33086 1.36885 6.45938C1.30459 6.58483 1.25716 6.721 1.22656 6.86787C1.19902 7.01475 1.18525 7.19222 1.18525 7.40029V8.01074C1.18525 8.18822 1.22656 8.32591 1.30918 8.42383C1.3918 8.52174 1.52949 8.58294 1.72227 8.60742C1.91198 8.6319 2.16442 8.65485 2.47959 8.67627C2.79782 8.69463 3.1543 8.71146 3.54902 8.72676C3.94375 8.739 4.35225 8.74971 4.77451 8.75889C5.19984 8.76807 5.60833 8.77266 6 8.77266ZM1.32295 10.7738C1.14548 10.7738 0.997071 10.7142 0.877735 10.5948C0.758399 10.4755 0.698731 10.3286 0.698731 10.1542V8.70381L2.49336 9.02969V10.1542C2.49336 10.3286 2.43369 10.4755 2.31436 10.5948C2.19502 10.7142 2.04661 10.7738 1.86914 10.7738H1.32295ZM10.1263 10.7738C9.95186 10.7738 9.80498 10.7142 9.68564 10.5948C9.56937 10.4755 9.51123 10.3286 9.51123 10.1542V9.02969L11.3013 8.70381V10.1542C11.3013 10.3286 11.2416 10.4755 11.1223 10.5948C11.0029 10.7142 10.8561 10.7738 10.6816 10.7738H10.1263Z"
                      fill="#4D008C"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_42729_14575">
                      <Rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(0 0.777832)"
                      />
                    </ClipPath>
                  </Defs>
                </Svg>
                <Text className="text-sm text-[#4D008C]">5 Riyal</Text>
              </View>
            </View>
          </View>
          <View
            style={{ width: SCREEN_WIDTH * 0.97 }}
            className="flex-row bg-white rounded-lg justify-between h-14 items-center mx-auto"
          >
            <View className="flex-[0.5] items-center">
              <Svg width="12" height="15" viewBox="0 0 12 15" fill="none">
                <Path
                  d="M5.65664 0.510864C2.82603 0.510864 0.524414 2.76134 0.524414 5.52904C0.524414 7.54151 1.77084 9.68682 2.99049 11.3564C4.21013 13.0259 5.43051 14.2191 5.43051 14.2191C5.49066 14.2779 5.57221 14.3109 5.65723 14.3109C5.74225 14.3109 5.8238 14.2779 5.88395 14.2191C5.88395 14.2191 7.10433 13.0259 8.32398 11.3564C9.54362 9.68682 10.7889 7.54151 10.7889 5.52904C10.7889 2.76134 8.48725 0.510864 5.65664 0.510864ZM5.65664 1.13828C8.14054 1.13828 10.1472 3.10033 10.1472 5.52904C10.1472 7.28015 8.98792 9.36816 7.80187 10.9917C6.72912 12.4602 5.8517 13.3149 5.65664 13.5095C5.46123 13.3145 4.5851 12.4599 3.51259 10.9917C2.32654 9.36816 1.16609 7.28015 1.16609 5.52904C1.16609 3.10033 3.17273 1.13828 5.65664 1.13828Z"
                  fill="#4D008C"
                  stroke="#4D008C"
                  stroke-width="0.5"
                />
                <Path
                  d="M5.65679 3.33313C4.42054 3.33313 3.41211 4.32031 3.41211 5.52909C3.41211 6.73787 4.42054 7.72505 5.65679 7.72505C6.89304 7.72505 7.90265 6.73787 7.90265 5.52909C7.90265 4.32031 6.89304 3.33313 5.65679 3.33313ZM5.65679 3.96055C6.54634 3.96055 7.26098 4.65931 7.26098 5.52909C7.26098 6.39887 6.54634 7.09763 5.65679 7.09763C4.76724 7.09763 4.05378 6.39887 4.05379 5.52909C4.05379 4.65931 4.76724 3.96055 5.65679 3.96055Z"
                  fill="#4D008C"
                />
              </Svg>
              <Text className="text-[#4D008C] text-sm">0.6 km</Text>
            </View>
            <View className="h-8 w-1 bg-slate-200 flex-[0.005]"></View>
            <View className="flex-[0.5] items-center">
              <Svg width="12" height="13" viewBox="0 0 12 13" fill="none">
                <Path
                  d="M5.99808 12.3214C9.28662 12.3214 12.001 9.70275 12.001 6.53571C12.001 3.36868 9.28082 0.75 5.99228 0.75C2.70953 0.75 0.000976562 3.36868 0.000976562 6.53571C0.000976562 9.70275 2.71533 12.3214 5.99808 12.3214ZM5.99808 11.1688C3.33592 11.1688 1.20736 9.10403 1.20736 6.53571C1.20736 3.96739 3.33592 1.90826 5.99228 1.90826C8.65443 1.90826 10.7946 3.96739 10.8004 6.53571C10.8062 9.10403 8.66023 11.1688 5.99808 11.1688ZM3.07493 7.24074H5.99228C6.25907 7.24074 6.46207 7.0449 6.46207 6.79311V3.13367C6.46207 2.88187 6.25907 2.68603 5.99228 2.68603C5.73708 2.68603 5.53408 2.88187 5.53408 3.13367V6.34547H3.07493C2.81393 6.34547 2.61093 6.54131 2.61093 6.79311C2.61093 7.0449 2.81393 7.24074 3.07493 7.24074Z"
                  fill="#4D008C"
                />
              </Svg>
              <Text className="text-[#4D008C] text-sm">Closes at 05.59 AM</Text>
            </View>
          </View>
        </View>
      )}
      contentInsetAdjustmentBehavior="automatic"
      renderItem={(p) => (
        <Link asChild href={"#"}>
          <Pressable
            style={{ width: SCREEN_WIDTH * 0.9 }}
            className="h-56 mx-auto bg-white rounded-lg px-2 pt-1"
          >
            <View className="bg-slate-200 rounded-lg flex-[0.9]"></View>
            <View className="flex-row justify-between items-center flex-[0.2]">
              <Text>Grand Share Box</Text>
              <Text>SAR 275.00</Text>
            </View>
          </Pressable>
        </Link>
      )}
    />
  );
}

export default RestaurantCard;
