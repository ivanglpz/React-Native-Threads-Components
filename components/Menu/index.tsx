import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
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

const { height: screenHeight } = Dimensions.get("window");

export const Menu = ({ isOpen, options, onClose }: MenuProps) => {
  const [show, setShow] = useState(false);
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

  const handleClose = () => {
    translateY.value = withTiming(screenHeight, { duration: 300 }, () => {
      runOnJS(onClose)();
      runOnJS(setShow)(false);
    });
  };

  const tap = Gesture.Pan()
    .onChange((event) => {
      if (event.translationY <= 0) return;

      translateY.value = event.translationY;
    })
    .onFinalize(() => {
      if (translateY.value > 75) {
        runOnJS(handleClose)();
      } else {
        runOnJS(handleShow)();
      }
    });

  useEffect(() => {
    if (show) {
      handleShow();
      return;
    }
  }, [show]);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      return;
    }
    handleClose();
  }, [isOpen]);

  return (
    <Modal visible={show} transparent animationType="fade">
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.bg}>
            <Animated.View style={[styles.container, animatedStyle]}>
              <GestureDetector gesture={tap}>
                <View style={styles.bar_container}>
                  <View style={styles.bar}></View>
                </View>
              </GestureDetector>
              <View style={styles.container_list}>
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
        </SafeAreaView>
      </GestureHandlerRootView>
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
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#222222",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: "100%",
  },
  bar_container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
  },
  container_list: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    gap: 12,
    display: "flex",
    flexDirection: "column",
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  borderBottomRadius: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  option: {
    backgroundColor: "#292929",
    padding: 15,
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
