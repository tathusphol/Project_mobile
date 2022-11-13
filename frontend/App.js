import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Assignment from "./app/screen/Assignment";
import Home from "./app/screen/Home";
import Login from "./app/screen/Login";
import ManageRole from "./app/screen/ManageRole";
import Course from "./app/screen/Course";
import Register from "./app/screen/Register";
import MyNavigator from "./app/navigator/Navigation";
import Profile from "./app/screen/Profile";
import CourseInfo from "./app/screen/Courseinfo";
import CourseCreate from "./app/screen/CourseCreate";
import CreateLesson from "./app/screen/CreateLesson";
import Test from "./app/screen/Test"
import EditAssignment from "./app/screen/EditAssignment"
import CreateDescription from "./app/screen/CreateDescription";

export default function App() {
  return <MyNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
