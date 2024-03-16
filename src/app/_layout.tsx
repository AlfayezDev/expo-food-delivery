import "../global.css";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export default function Layout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="restaurant-card"
        options={{
          headerRight: () => (
            <View className="flex-row gap-5 items-center">
              <Svg width="19" height="18" viewBox="0 0 19 18" fill="none">
                <Path
                  d="M0.298486 5.95027C0.298486 9.80813 3.52538 13.6119 8.56402 16.8568C8.83443 17.0281 9.17695 17.1993 9.40229 17.1993C9.63665 17.1993 9.97016 17.0281 10.2406 16.8568C15.2792 13.6119 18.5061 9.80813 18.5061 5.95027C18.5061 2.64226 16.2256 0.334757 13.2692 0.334757C11.5566 0.334757 10.2135 1.12796 9.40229 2.31776C8.60008 1.13697 7.24803 0.334757 5.53543 0.334757C2.58796 0.334757 0.298486 2.64226 0.298486 5.95027ZM2.11023 5.95027C2.11023 3.6608 3.61552 2.11946 5.63458 2.11946C7.26605 2.11946 8.17644 3.11097 8.7443 3.97628C8.99668 4.33683 9.16794 4.454 9.40229 4.454C9.63665 4.454 9.78988 4.32781 10.0603 3.97628C10.6642 3.11998 11.5475 2.11946 13.17 2.11946C15.1891 2.11946 16.6944 3.6608 16.6944 5.95027C16.6944 9.14111 13.3683 12.6655 9.57355 15.1893C9.49243 15.2434 9.43835 15.2794 9.40229 15.2794C9.36624 15.2794 9.31216 15.2434 9.23103 15.1893C5.43628 12.6655 2.11023 9.14111 2.11023 5.95027Z"
                  fill="#FAFAFA"
                />
              </Svg>
              <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <G clip-path="url(#clip0_29683_714860)">
                  <Path
                    d="M12.1843 22.7987C11.5184 22.7987 11.0342 22.3058 11.0342 21.6486V18.5268H10.818C7.63571 18.5268 5.69003 19.4435 4.31508 22.0031C3.98648 22.6257 3.56275 22.7641 3.11309 22.7641C2.51641 22.7641 2.0581 22.2106 2.0581 21.147C2.0581 14.869 4.81663 11.0122 10.818 11.0122H11.0342V7.91639C11.0342 7.25054 11.5184 6.7144 12.2016 6.7144C12.6599 6.7144 12.9798 6.90464 13.4814 7.36296L20.3302 13.7534C20.6674 14.0734 20.7885 14.4279 20.7885 14.7565C20.7885 15.0678 20.6674 15.4397 20.3302 15.7596L13.4814 22.1933C13.0231 22.6084 12.6512 22.7987 12.1843 22.7987ZM12.7291 20.6022C12.7809 20.6022 12.8328 20.5763 12.8761 20.533L18.8082 14.9208C18.8774 14.8517 18.9033 14.8084 18.9033 14.7565C18.9033 14.7046 18.8774 14.6614 18.8082 14.5922L12.8761 8.92815C12.8415 8.88491 12.7896 8.85897 12.7377 8.85897C12.6599 8.85897 12.608 8.91085 12.608 8.98868V12.2661C12.608 12.465 12.5215 12.5514 12.3226 12.5514H11.2071C5.59491 12.5514 3.65788 16.2871 3.51952 20.3947C3.51952 20.4552 3.53681 20.4812 3.58005 20.4812C3.61464 20.4812 3.63193 20.4552 3.65788 20.4033C4.69557 18.2501 7.22928 16.9703 11.2071 16.9703H12.3226C12.5215 16.9703 12.608 17.0568 12.608 17.2557V20.4639C12.608 20.5417 12.6599 20.6022 12.7291 20.6022Z"
                    fill="#FAFAFA"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_29683_714860">
                    <Rect width="30" height="30" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
          ),
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#FF0000",
          },
          headerSearchBarOptions: {
            placeholder: "Search",
            obscureBackground: false,
            hideNavigationBar: false,
            hideWhenScrolling: false,
            tintColor: "black",
            barTintColor: "white",
          },
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: " ",
          headerLeft: JahezLogo,
          headerRight: MapButton,
          headerStyle: {
            backgroundColor: "#FF0000",
          },
          headerSearchBarOptions: {
            placeholder: "Search",
            obscureBackground: false,
            hideNavigationBar: false,
            hideWhenScrolling: false,
            tintColor: "black",
            barTintColor: "white",
          },
        }}
      />
    </Stack>
  );
}
function JahezLogo() {
  return (
    <Svg width="67" height="21" viewBox="0 0 67 21" fill="none">
      <G clip-path="url(#clip0_32089_473608)">
        <Path
          d="M19.3842 13.568C18.8687 13.568 18.3647 13.4174 17.936 13.1352C17.5073 12.853 17.1732 12.4518 16.9758 11.9825C16.7785 11.5132 16.7269 10.9967 16.8274 10.4984C16.9279 10.0002 17.1762 9.54248 17.5407 9.18323C17.9052 8.82398 18.3697 8.57932 18.8753 8.48017C19.381 8.38103 19.9051 8.43187 20.3814 8.62625C20.8578 8.82063 21.2649 9.14983 21.5514 9.57221C21.8378 9.9946 21.9907 10.4912 21.9908 10.9992C21.99 11.6802 21.7151 12.3331 21.2265 12.8147C20.7379 13.2962 20.0753 13.5671 19.3842 13.568Z"
          fill="#FFC20E"
        />
        <Path
          d="M28.5996 17.0991V0H31.4991V6.4572C32.2071 5.35471 33.6688 4.56719 35.4266 4.56719C36.0547 4.55539 36.6788 4.66666 37.2629 4.89453C37.8469 5.1224 38.3792 5.46233 38.8288 5.89459C39.7648 6.77217 40.2444 8.00934 40.2444 9.65205V17.0991H37.276V10.4394C37.276 8.39216 36.2031 7.24455 34.5596 7.24455C32.8015 7.24455 31.5685 8.57211 31.5685 10.4845V17.0991H28.5996Z"
          fill="white"
        />
        <Path
          d="M45.0709 9.80904H51.6924C51.4411 8.09916 50.1854 7.04162 48.473 7.04162C46.7376 7.04162 45.4591 8.09916 45.0709 9.80904ZM54.5236 12.0366H45.0709C45.4591 13.7239 46.7376 14.8479 48.861 14.8479C50.3235 14.8591 51.7528 14.4186 52.9481 13.5882L54.1356 15.6804C52.6055 16.8053 50.802 17.3677 48.7469 17.3677C44.0892 17.3677 42.0342 14.218 42.0342 10.9782C42.0342 9.13314 42.6279 7.60339 43.815 6.41083C45.0252 5.19606 46.5778 4.58861 48.473 4.5885C50.2766 4.5885 51.7378 5.15094 52.8797 6.25343C54.044 7.35592 54.6152 8.84072 54.6152 10.7314C54.6121 11.1679 54.5815 11.6039 54.5236 12.0366Z"
          fill="white"
        />
        <Path
          d="M60.4478 14.647H67.0007V17.0994H56.3828V15.1184L62.7986 7.35766H56.7025V4.90454H66.7719V6.83933L60.4478 14.647Z"
          fill="white"
        />
        <Path
          d="M10.9296 4.86865H4.7887V7.84937H7.90469V14.7764C7.90469 16.8868 6.69001 18.1485 4.76923 18.1485C3.55488 18.1485 2.47294 17.6701 1.54578 16.691L0 18.9973C1.30284 20.3247 2.95899 20.9994 4.96792 20.9994C6.71239 20.9994 8.14746 20.4776 9.25179 19.4544C10.3775 18.432 10.9295 16.909 10.9295 14.9069V7.84937L10.9296 4.86865Z"
          fill="white"
        />
        <Path
          d="M23.3987 4.88254V5.9756C22.4415 5.23263 21.2914 4.77015 20.08 4.64107C18.8686 4.512 17.6448 4.72154 16.5486 5.24571C15.4524 5.76989 14.528 6.58754 13.8813 7.60512C13.2346 8.62269 12.8916 9.79911 12.8916 10.9998C12.8916 12.2004 13.2346 13.3768 13.8813 14.3944C14.528 15.412 15.4524 16.2296 16.5486 16.7538C17.6448 17.278 18.8686 17.4875 20.08 17.3585C21.2914 17.2294 22.4415 16.7669 23.3987 16.0239V17.0997H26.1929V4.88254H23.3987ZM19.3849 14.9477C18.5925 14.9477 17.8179 14.7162 17.1591 14.2824C16.5002 13.8486 15.9867 13.232 15.6835 12.5107C15.3802 11.7893 15.3009 10.9955 15.4554 10.2297C15.61 9.46391 15.9916 8.76048 16.5519 8.20835C17.1122 7.65623 17.826 7.28022 18.6032 7.12787C19.3803 6.97552 20.1859 7.05368 20.918 7.35246C21.65 7.65123 22.2758 8.15721 22.716 8.80641C23.1563 9.45561 23.3913 10.2189 23.3913 10.9997C23.3901 12.0464 22.9676 13.0498 22.2165 13.79C21.4654 14.5301 20.4471 14.9465 19.3849 14.9477Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_32089_473608">
          <Rect width="67" height="21" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
function MapButton() {
  return (
    <Svg width="16" height="25" viewBox="0 0 16 25" fill="none">
      <G clip-path="url(#clip0_32133_474553)">
        <Path
          d="M12.7934 7.5C12.7934 9.27035 11.453 10.6684 9.84375 10.6684C8.23453 10.6684 6.89408 9.27035 6.89408 7.5C6.89408 5.72965 8.23453 4.33158 9.84375 4.33158C11.453 4.33158 12.7934 5.72965 12.7934 7.5Z"
          fill="#FF8300"
          stroke="#FF8300"
          stroke-width="0.663161"
        />
        <Path
          d="M7.9516 2C4.08959 2 0.9375 5.15854 0.9375 9.02846C0.9375 9.14228 0.9375 9.28455 0.9375 9.39837L0.965897 9.96748C1.07949 10.565 1.33506 11.5894 1.903 13.0407C2.75492 15.1463 4.48715 18.5325 7.98 23C9.62704 20.7236 14.4262 13.8374 14.8521 10.2236V10.1951C14.9089 9.8252 14.9373 9.42683 14.9373 9.02846C14.9657 5.15854 11.8136 2 7.9516 2ZM7.92321 12.1585C6.21938 12.1585 4.82791 10.7642 4.82791 9.05691C4.82791 7.34959 6.21938 5.95528 7.92321 5.95528C9.62704 5.95528 11.0185 7.34959 11.0185 9.05691C11.0185 10.7642 9.62704 12.1585 7.92321 12.1585Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_32133_474553">
          <Rect
            width="15"
            height="21"
            fill="white"
            transform="translate(0 2)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
