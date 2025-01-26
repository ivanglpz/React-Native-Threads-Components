import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import {
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
type MenuOption = {
  label: string;
  onPress: VoidFunction;
  style?: "default" | "danger";
  icon?: keyof typeof FontAwesome.glyphMap;
};
type MenuProps = {
  options: MenuOption[][] | MenuOption[];
  isOpen: boolean;
  onClose: VoidFunction;
};

const gap = 12;
const padding = 15;
const borderRadius = 20;
const { height: screenHeight } = Dimensions.get("window");

export const Menu = ({ isOpen, options, onClose }: MenuProps) => {
  const data: MenuOption[][] = options?.every((e) => Array.isArray(e))
    ? options
    : [options as MenuOption[]];

  const translateY = useSharedValue(screenHeight);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleShow = () => {
    translateY.value = withTiming(0, { duration: 300 });
  };

  const handleHide = () => {
    translateY.value = withTiming(screenHeight, { duration: 300 }, () => {
      runOnJS(onClose)();
    });
  };

  const tap = Gesture.Pan()
    .onChange((event) => {
      if (event.translationY <= 0) return;

      translateY.value = event.translationY;
    })
    .onFinalize(() => {
      if (translateY.value > 75) {
        runOnJS(handleHide)();
      } else {
        runOnJS(handleShow)();
      }
    });
  useEffect(() => {
    isOpen ? handleShow() : handleHide();
  }, [isOpen]);

  return (
    <Modal visible={isOpen} transparent animationType="fade">
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={styles.bg}>
            <Animated.View style={[styles.container, animatedStyle]}>
              <GestureDetector gesture={tap}>
                <Animated.View style={styles.bar_container}>
                  <Animated.View style={styles.bar}></Animated.View>
                </Animated.View>
              </GestureDetector>
              <View style={{ padding: padding, gap: gap }}>
                {data?.map((e, MainIndex) => {
                  return (
                    <View key={`menu_option_${MainIndex}`}>
                      {e?.map((item, index) => {
                        return (
                          <TouchableOpacity
                            key={`menu_section_option_${index}-${MainIndex}`}
                            style={[
                              styles.option,
                              index === 0 ? styles.borderTopRadius : {},
                              index + 1 === e?.length
                                ? styles.borderBottomRadius
                                : {},
                            ]}
                            onPress={() => {
                              item?.onPress?.();
                            }}
                          >
                            <Text
                              style={
                                styles?.[
                                  `option_style_${item.style ?? "default"}`
                                ]
                              }
                            >
                              {item?.label ?? "Default text"}
                            </Text>
                            {item?.icon ? (
                              <FontAwesome
                                name={item?.icon}
                                color="white"
                                style={
                                  styles?.[
                                    `option_style_${item.style ?? "default"}`
                                  ]
                                }
                              />
                            ) : null}
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </Animated.View>
          </View>
        </GestureHandlerRootView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#222222",
    minHeight: 100,
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    paddingBottom: padding,
  },
  bar_container: {
    height: 30,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bar: {
    backgroundColor: "#3B3E3D",
    width: 50,
    height: 5,
  },
  separator: {
    backgroundColor: "#353535",
    height: 1,
    width: "100%",
  },
  borderTopRadius: {
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
  },
  borderBottomRadius: {
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  option: {
    backgroundColor: "#292929",
    padding: padding,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  option_style_default: {
    color: "white",
  },
  option_style_danger: {
    color: "#F21F40",
  },
});
