import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import React from "react";

import { icons } from "../../constants";

const TabIcon = ({ icon, color, icon_name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
          tintColor: color,
          className: "w-6 h-6",
        }}
      />
      <Text
        style={{
          fontFamily: focused ? "font-psemibold" : "font-pregular",
          fontSize: 10,
          color: color,
        }}
      >
        {icon_name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#4B3F30",
          tabBarInactiveTintColor: "#A68A64",
          tabBarStyle: {
            backgroundColor: "#EDE3D3",
            borderTopWidth: 0,
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                icon={icons.home} 
                color={color}
                icon_name="Home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                icon={icons.plus} 
                color={color}
                icon_name="Create"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                icon={icons.profile} 
                color={color}
                icon_name="Profile"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                focused={focused}
                icon={icons.bookmark} 
                color={color}
                icon_name="Bookmark"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
