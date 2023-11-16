import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  const handleNavigation = (request) => {
    // Check if the request is user-initiated
    if (request.navigationType === 'click' || request.navigationType === 'formsubmit') {
      // Open external browser for user-initiated requests
      Linking.openURL(request.url);
      return false; // Prevent WebView from loading the URL
    } else {
      // Allow all other requests to load within the WebView
      return true;
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://sites.google.com/lmsvsd.net/lmsv-extended-school-services/home' }}
        style={styles.webView}
        onShouldStartLoadWithRequest={handleNavigation} // Add this line
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webView: {
    flex: 1, // Ensures WebView takes up the remaining space
  },
});
