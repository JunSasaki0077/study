import { CustomButtonProps } from '@/type'
import cn from 'clsx'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
const CustomButton = ({
  onPress,
  title = 'Click Me',
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity className={cn('custom-btn', style)} onPress={onPress}>
      {leftIcon}
      <View className="flex-cente flex-row">
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className={cn('text-white-100 paragraph-semibold', textStyle)}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
export default CustomButton
