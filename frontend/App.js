import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/screen/Home";
import Login from "./app/screen/Login";
import ManageRole from "./app/screen/ManageRole";
import Course from "./app/screen/Course";
import Register from "./app/screen/Register";
import MyNavigator from "./app/navigator/navigation";
import Profile from "./app/screen/Profile";
import CourseInfo from "./app/screen/Courseinfo";
import CourseAdmin from "./app/screen/CourseAdmin";
export default function App() {
  return <Profile />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
