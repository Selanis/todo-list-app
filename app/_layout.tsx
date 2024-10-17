
import 'react-native-reanimated';
import { Header } from '@/assets/components/header/header';
import { store } from '@/assets/services/root-reducer';
import { Provider } from 'react-redux';
import { Tasks } from '@/assets/components/tasks/tasks';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';

export default function RootLayout() {

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
      <Header />
      <Tasks />
    </Provider>
    </GestureHandlerRootView>
    
    
  );
}
