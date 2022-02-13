import Images from 'app/config/Images';

export const cardMenu = [
  {
    title: 'Top-up account',
    subTitle: 'Deposit money to your account to use with card',
    disabled: true,
    showSwitch: false,
    imageIcon: Images.topup,
  },
  {
    title: 'Weekly spending limit',
    subTitle: 'You haven’t set any spending limit on card',
    disabled: false,
    showSwitch: true,
    imageIcon: Images.spend,
  },
  {
    title: 'Freeze card',
    subTitle: 'Your debit card is currently active',
    disabled: true,
    showSwitch: true,
    imageIcon: Images.freeze,
  },
  {
    title: 'Get a new card',
    subTitle: 'This deactivates your current debit card',
    disabled: true,
    showSwitch: false,
    imageIcon: Images.newcard,
  },
  {
    title: 'Deactivated cards',
    subTitle: 'Your previously deactivated cards',
    disabled: true,
    showSwitch: false,
    imageIcon: Images.deactivate,
  },
];
