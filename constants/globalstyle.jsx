import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    miniText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center",
        color: "#fff",
    },
    coloredRectangle: {
        width: '70%',
        height: '50%',
        backgroundColor: "#3083e3",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
})