import { Share } from "react-native";

export default async () => {
  try {
    const result = await Share.share({
      message: 'Te invito a que conozcas Yampi https://play.google.com/store/apps/details?id=co.yampi.app',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error) {
    alert(error.message);
  }
};