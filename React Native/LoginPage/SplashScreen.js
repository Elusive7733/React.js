import AnimatedSplash from "react-native-animated-splash-screen";

import React from "react";

export default function SplashScreen() {
  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={this.state.isLoaded}
      logoImage={require("./assets/logo.png")}
      backgroundColor={"#262626"}
      logoHeight={150}
      logoWidth={150}
    >
      <App />
    </AnimatedSplash>
  );
}
