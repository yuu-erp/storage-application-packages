import { MessageType } from 'src/types/enum'

export const contacts = [
  {
    id: 1,
    name: 'Mom',
    img: 'https://s3-alpha-sig.figma.com/img/ad57/1f03/d6624afde9df5d6a25cd3b213d958954?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VYeYYrkZYqQmJFHnznFa-9Hm2LuWfF01PNj4RQiLUdXvzblSz0R2kcs6Dt4WZQUAVnZxsOAICEsuBS6QVS5TYenIqve3UVYBLX0FnLVJBDNC3Bgo1rKY7r2EErMlQytKhYuFikaVW4pKK71K5djUUbIrQIa4T3q8bSU1j5m30CRUKB5xy8jtKIMOVGWewy2UidEKE39dWohj3HEcmnODukQtDJJhmYmrqHU8IUKa3G9IOaSwfjV0phGlO0Xbn-BaZnoa5wmI8XAiltQvM7sSNC-SbIYNFM1bmWsbRBn3DKDwtNpfYRhRN~U-lC4xatLMcKos7KnF0HIv5p48mcBwtA__'
  },
  {
    id: 2,
    name: 'Community',
    img: 'https://s3-alpha-sig.figma.com/img/b3e6/b8ef/a0226c20d26a36650b4b73c87d3e4456?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rGw~MiZb6dgyJuMnjl591seJgV5Qy8bp0wXF2JBSabANhrHt1GYMMdFKKQTaTqYVVAFRZkDOHdsYw8mRibzHZnOLBROan2Hmzuvgb~i5djgzQfnlvLlKt~DWUYA5CRyBd5kmHS966Z8CmFOqnkBUCEYee6h~FqdWtzsYOu3Lqgy9CS7pnCTcc4j1nVQ~V0c6xtc3lP4Ld-Vk61-P0PoByRTsudzG2Z8MbfIOdMYLz7~0VVfrsa~V3fGH3rZcXxjcj5nX5W9am5X4CeELc9Fsg5-AIlKYQWmms14GKc1HeZyseO3Fa3qJe1QvxDuq10SOILN-2tXNShgeA2~Hb6Y-4w__'
  },
  {
    id: 3,
    name: 'Raquel',
    img: 'https://s3-alpha-sig.figma.com/img/f386/e8e5/42163741f233faecd761938dab584930?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i-zMuktpVBi-TeuVf78HFF4vsNFfeUFJkg7zsDQgyy7XG4Elo1Abdip6bLR00HIo7Mly3Os3ZVIRGayvYR6UssxTzKlJEA5hQSb6dqBunJw5pSwIbZySwTdmqvcY9ISc6lgdtDi2RS~K59zA5V~Hj4FoA0Ynkjz0FrW45Mhon-EJ~kVkIkKW-6aGMNjkWHQOKdGgQwLAfHzSqcY6hVMQONwDBXjfs1dhWHsl908JDiS6PdPTyZUE8DauJBIs0C2-b7vvZcjjSpo-rlQlpsyDO3SzZecT10S4vTwoQi6BrGqFftoR6yI5yFLX7W7zevOsr3rPvQvgYVugI1A9IURevQ__'
  },
  {
    id: 4,
    name: 'Angad',
    img: 'https://s3-alpha-sig.figma.com/img/4cf2/729d/22a3a83f08dd8d77087c840e7e50d98a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hxfsRNZhF-u5nHtGFcLr1BhmJaCiX6YIwcx9OL9p3smBEWkoIOzynPKkmUUj7MoGWQ9n0hFn7hxOvBBySy9JSKlwsXxZ~bADQg6E3Mw~7gBH6XOaKSE83f1Pmnbawe4AZePbke61tq0OXJjyOqD8MKPt~fv56gzgw~R~yxWFW-Fxz0rOSPnCHk7GZhJ6ofA4q8-ixsyB9cLUQjpYVTXJSLgJWqvZt5eqptQoJ3dZicOZGy92Zy0xmbFwQv8Y0YWxG4RVEFN-Pk4XQoXwylN9-w0fIvOAaX0zv~mAnIkVXjjxVnoZZnRCCGUwyqI2Ua8OLq9uiHAzdnLIplOLTTj8-A__'
  },
  {
    id: 5,
    name: 'Trevor',
    img: 'https://s3-alpha-sig.figma.com/img/4c4f/4966/49f5e7458470fe01cff8caf60d14aaf2?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tcBaLJzrnzaVjTNgvj4bJPQhsaUDEy~a9UORYWfNQnskOyjkHqAeqigSLEnVIuQ8mTdAj2bccEtPvXJ5Kj8S1fUzGn-vmfKzBmIUTcxu35d7jROVHRyCeAgg9rhy3JpJXM1MVJbajaH9-e5HuIwzymmErQV22kYDSATta3hDCqlcHIuqiuGyMK49~QL9OghHX21mYZm3J19G-mawSHv7RI3JxRiwm5i3xoP3raYrgyZmshGURWM6b1T2pysNmiL4-L0KpMVJMkgqKKqISeXheTYIO~cpB8j5uWHHvn-2ShsTEiJVihKJFrPeKJfCPbag-4tm3e6K-mBjxQfwcxcXSg__'
  },
  {
    id: 6,
    name: 'Mark',
    img: 'https://s3-alpha-sig.figma.com/img/40dd/2e0d/10191d9f4e50ab9f0c136237a0e53f8c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UDx-Gy0AIwA-M6t9CMk7EFhuZbooulJb18cSGGLGDgpUjg-cLFjTrfMSVBjGeSgw6mhqPGrsVaLWA7qmEFaoKAnfIZdsDJBuTOIl1BLnwdKBCLdTWPvuR1fA9U1ALc86HpGaXyswC~EbNSSkUDOwmowBq1rGXIs3hCan7OCzdcmCXHRLxsTXi5sMbaC4n-nAdaTXKWkJ5eQK8XK~X0vDlsdA7neWvXSIwFXmviRyeT337NOQyu0eKjBn8N89Mld~MOsp5C~XIglZnBt0maSoGjj-uNRRUBl1QNlT9xC-hOjksAjypRm4nfuXXLdqz1jKWAXic59h9hL~0l8qbqLDzw__'
  }
]

export const messages = [
  {
    id: 1,
    name: 'Mom',
    img: 'https://s3-alpha-sig.figma.com/img/ad57/1f03/d6624afde9df5d6a25cd3b213d958954?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VYeYYrkZYqQmJFHnznFa-9Hm2LuWfF01PNj4RQiLUdXvzblSz0R2kcs6Dt4WZQUAVnZxsOAICEsuBS6QVS5TYenIqve3UVYBLX0FnLVJBDNC3Bgo1rKY7r2EErMlQytKhYuFikaVW4pKK71K5djUUbIrQIa4T3q8bSU1j5m30CRUKB5xy8jtKIMOVGWewy2UidEKE39dWohj3HEcmnODukQtDJJhmYmrqHU8IUKa3G9IOaSwfjV0phGlO0Xbn-BaZnoa5wmI8XAiltQvM7sSNC-SbIYNFM1bmWsbRBn3DKDwtNpfYRhRN~U-lC4xatLMcKos7KnF0HIv5p48mcBwtA__',
    time: '6:30 PM',
    message: 'Hey! How are you feeling today? Still sick? Hope you had lunch.'
  },
  {
    id: 2,
    name: 'Liam',
    img: 'https://s3-alpha-sig.figma.com/img/b4dd/3e71/4cc39a5f69deaff14d44441dc8e11b9d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ODjA~l25l5BoVCtpjmcf5gywOnUVg83MXPhRg-mwXNija8Ak2jjJGwz7XUZDtSmqB8T29~Qp1S22h-MykQG008XydGCJojX~Npwlsmm8Zf5hr59aRAXpXgf0~MM7i20jWoWSV8Oy6BsDMuE-ut2rC8q~MaASKDcIKet4p0kW02EFZyC6cN~V86kWoAyOn657ePEXrQ8g-BL7ZSYEzSymsPjjxxZ9A92pEph74hDpw-Nj1QdrlUABLrZpxXBJKf5z9OgHR2fYI3q4HNZ5w8VLtJqDJC73wnkr4~esHKDrtJUVKKCPbRJvWB4FEyHDF5Aj7V0x0VNYTBx6p0NBH32F9g__',
    time: '5:00 PM',
    message: 'Hey! Just a reminder that our dinner plans are set for tomorr...'
  },
  {
    id: 3,
    name: 'Ava',
    img: 'https://s3-alpha-sig.figma.com/img/a240/e798/52c8f0d76821a360324586d8bc58cc5f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OXrDbstyEYUQyg4kZaUPEYmAFtZeLooi~kAqikOVRW~0ti5QtVYczGSDF90wwZUnzd278HbmwFYssmv8xHuqJzwFIM9iGlGjEF5PdmOl49nkFXlrjwcjCb8YFVsf2GIsSTkFlnV~o-WzAhzImWh~-izHVjwdjpJUgleWrBS4B7KbSdWXwnwkFv~Wevw-g9R-n3QePAqLbztdslcB7mS7G16ikFpo77ZaUABKaJ6POdYny6q92yI5QzRa9HxBwwpstvkQgY041GDanUCOFdxyPW6G-9houhEX3g1bK4vZsYFmh~5CRjFlbN9CXbaociX1Gh8yjAE4BgSA9tGlz~Tu9A__',
    time: '8:30 PM',
    message: 'Alright, I have booked our tickets. See you at the movies.'
  },
  {
    id: 4,
    name: 'Miley',
    img: 'https://s3-alpha-sig.figma.com/img/da95/2526/ebf07cddcb38b889f0f2a14e030f8783?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qgWqAUEewlw-uU6k1r4vT62RW62Dh-sQupfXAy6rnEfjHACsvdPW9kLg9wzdHTO2D3FTokNaC4LT0DLhUiDM5TwZHfzHLFbMuNmsIQEKs7lFBCwqFT1YSVPcySucH7gXcgiA7XkNNry-MAc5XzjlI4-DMvgh~wTqCumfToqncUklmrwo3oYunHdK9uDmOfXNso6uhETAhlgYulmYjbCTr5ikc01aqJRbquUq0Lboc4n35tecdpn~NLGy1aijc~8WH8ftn-QUOFVBsztKXJcSmeNkdKFkxDZLlpSGEtRxNoRkozHfeMhzv6e16yZHOx2W0TOikWK6ujrpyKg-QaXXxQ__',
    time: '7:00 PM',
    message: "Hey, I found this amazing recipe that I think you'll love. Let me..."
  },
  {
    id: 5,
    name: 'Ryan',
    img: 'https://s3-alpha-sig.figma.com/img/77bb/d505/1c2003c10953e3d079eaf65c36dc4a0d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CoaIHTF6SBbPVNV0QqCqCFUnabcuss824ZSd0NBxxS-ukU-N718ZkyMBqVta1Xq5QgwvztubA~W5G4wpysHzP9Dqjrny6HLMyZIjwKdLm74vvWMgUXDw3EUsh4eBbUQRZr-356bk~mtLNRtktwGfkzr-fV6xS6jgSPrx0oMoSrdVTiEZhoTxg~RhgvWiVle74wUAxaXKY-4XvbKLuiKQc6-JeplKhBsMcFQVPN4w3uVdkCIDG3NskKRWqKJJzjlaojy-EBEDPszbbcNIaj1BefgY1f-54K33XVCw9TNF77PnVaQENVf27wYRxAewUzwReV7LWr-nf5ncQFgvx6IbqQ__',
    time: '9:00 AM',
    message: 'Good morning! Hope you are doing well. See you at the office'
  },
  {
    id: 6,
    name: 'Emily',
    img: 'https://s3-alpha-sig.figma.com/img/b755/ea58/68a3f323be16b77fda1dea01e7cf8f9f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b0SoXVd7uDrbg0m57mkBkM8PycZ8w-xzgxnbur6H2EC4U7y2dDyO~DekGwmGgSWXT~~Dl5PK1ZnhK65lbMonUqdTTf1nmZs5Wx850Z3iOsNKSlYShhPLCM-EhK-OPStG~rQkOJnd2KPH9CSA3llIqWNJe8X4rCVbQmBQNCWIyjtLBtMQlAflk0zzPF~gm~PMjZstbUPtp3ZC0ispIEs~1hB9L644fBencFmh-xRfBaDNBCsduJiIELfp4Nv6HIxWW-JFidyq~xp3FP4h9lt4XtzZfYLLVCPF8R9UCaU5jzfgzyMsSHGE1t9PXlSv-GpBNrC2GHEAgHS5~X8FHzo6xw__',
    time: '11:45 AM',
    message: 'Hi! I came across this interesting article and thought you might f...'
  }
  // {
  //   id: 7,
  //   name: 'Mom',
  //   img: 'https://s3-alpha-sig.figma.com/img/ad57/1f03/d6624afde9df5d6a25cd3b213d958954?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VYeYYrkZYqQmJFHnznFa-9Hm2LuWfF01PNj4RQiLUdXvzblSz0R2kcs6Dt4WZQUAVnZxsOAICEsuBS6QVS5TYenIqve3UVYBLX0FnLVJBDNC3Bgo1rKY7r2EErMlQytKhYuFikaVW4pKK71K5djUUbIrQIa4T3q8bSU1j5m30CRUKB5xy8jtKIMOVGWewy2UidEKE39dWohj3HEcmnODukQtDJJhmYmrqHU8IUKa3G9IOaSwfjV0phGlO0Xbn-BaZnoa5wmI8XAiltQvM7sSNC-SbIYNFM1bmWsbRBn3DKDwtNpfYRhRN~U-lC4xatLMcKos7KnF0HIv5p48mcBwtA__',
  //   time: '6:30 PM',
  //   message: 'Hey! How are you feeling today? Still sick? Hope you had lunch.'
  // },
  // {
  //   id: 8,
  //   name: 'Liam',
  //   img: 'https://s3-alpha-sig.figma.com/img/b4dd/3e71/4cc39a5f69deaff14d44441dc8e11b9d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ODjA~l25l5BoVCtpjmcf5gywOnUVg83MXPhRg-mwXNija8Ak2jjJGwz7XUZDtSmqB8T29~Qp1S22h-MykQG008XydGCJojX~Npwlsmm8Zf5hr59aRAXpXgf0~MM7i20jWoWSV8Oy6BsDMuE-ut2rC8q~MaASKDcIKet4p0kW02EFZyC6cN~V86kWoAyOn657ePEXrQ8g-BL7ZSYEzSymsPjjxxZ9A92pEph74hDpw-Nj1QdrlUABLrZpxXBJKf5z9OgHR2fYI3q4HNZ5w8VLtJqDJC73wnkr4~esHKDrtJUVKKCPbRJvWB4FEyHDF5Aj7V0x0VNYTBx6p0NBH32F9g__',
  //   time: '5:00 PM',
  //   message: 'Hey! Just a reminder that our dinner plans are set for tomorr...'
  // },
  // {
  //   id: 9,
  //   name: 'Ava',
  //   img: 'https://s3-alpha-sig.figma.com/img/a240/e798/52c8f0d76821a360324586d8bc58cc5f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OXrDbstyEYUQyg4kZaUPEYmAFtZeLooi~kAqikOVRW~0ti5QtVYczGSDF90wwZUnzd278HbmwFYssmv8xHuqJzwFIM9iGlGjEF5PdmOl49nkFXlrjwcjCb8YFVsf2GIsSTkFlnV~o-WzAhzImWh~-izHVjwdjpJUgleWrBS4B7KbSdWXwnwkFv~Wevw-g9R-n3QePAqLbztdslcB7mS7G16ikFpo77ZaUABKaJ6POdYny6q92yI5QzRa9HxBwwpstvkQgY041GDanUCOFdxyPW6G-9houhEX3g1bK4vZsYFmh~5CRjFlbN9CXbaociX1Gh8yjAE4BgSA9tGlz~Tu9A__',
  //   time: '8:30 PM',
  //   message: 'Alright, I have booked our tickets. See you at the movies.'
  // },
  // {
  //   id: 10,
  //   name: 'Miley',
  //   img: 'https://s3-alpha-sig.figma.com/img/da95/2526/ebf07cddcb38b889f0f2a14e030f8783?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qgWqAUEewlw-uU6k1r4vT62RW62Dh-sQupfXAy6rnEfjHACsvdPW9kLg9wzdHTO2D3FTokNaC4LT0DLhUiDM5TwZHfzHLFbMuNmsIQEKs7lFBCwqFT1YSVPcySucH7gXcgiA7XkNNry-MAc5XzjlI4-DMvgh~wTqCumfToqncUklmrwo3oYunHdK9uDmOfXNso6uhETAhlgYulmYjbCTr5ikc01aqJRbquUq0Lboc4n35tecdpn~NLGy1aijc~8WH8ftn-QUOFVBsztKXJcSmeNkdKFkxDZLlpSGEtRxNoRkozHfeMhzv6e16yZHOx2W0TOikWK6ujrpyKg-QaXXxQ__',
  //   time: '7:00 PM',
  //   message:
  //     "Hey, I found this amazing recipe that I think you'll love. Let me..."
  // },
  // {
  //   id: 11,
  //   name: 'Ryan',
  //   img: 'https://s3-alpha-sig.figma.com/img/77bb/d505/1c2003c10953e3d079eaf65c36dc4a0d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CoaIHTF6SBbPVNV0QqCqCFUnabcuss824ZSd0NBxxS-ukU-N718ZkyMBqVta1Xq5QgwvztubA~W5G4wpysHzP9Dqjrny6HLMyZIjwKdLm74vvWMgUXDw3EUsh4eBbUQRZr-356bk~mtLNRtktwGfkzr-fV6xS6jgSPrx0oMoSrdVTiEZhoTxg~RhgvWiVle74wUAxaXKY-4XvbKLuiKQc6-JeplKhBsMcFQVPN4w3uVdkCIDG3NskKRWqKJJzjlaojy-EBEDPszbbcNIaj1BefgY1f-54K33XVCw9TNF77PnVaQENVf27wYRxAewUzwReV7LWr-nf5ncQFgvx6IbqQ__',
  //   time: '9:00 AM',
  //   message: 'Good morning! Hope you are doing well. See you at the office'
  // },
  // {
  //   id: 12,
  //   name: 'Emily',
  //   img: 'https://s3-alpha-sig.figma.com/img/b755/ea58/68a3f323be16b77fda1dea01e7cf8f9f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=b0SoXVd7uDrbg0m57mkBkM8PycZ8w-xzgxnbur6H2EC4U7y2dDyO~DekGwmGgSWXT~~Dl5PK1ZnhK65lbMonUqdTTf1nmZs5Wx850Z3iOsNKSlYShhPLCM-EhK-OPStG~rQkOJnd2KPH9CSA3llIqWNJe8X4rCVbQmBQNCWIyjtLBtMQlAflk0zzPF~gm~PMjZstbUPtp3ZC0ispIEs~1hB9L644fBencFmh-xRfBaDNBCsduJiIELfp4Nv6HIxWW-JFidyq~xp3FP4h9lt4XtzZfYLLVCPF8R9UCaU5jzfgzyMsSHGE1t9PXlSv-GpBNrC2GHEAgHS5~X8FHzo6xw__',
  //   time: '11:45 AM',
  //   message:
  //     'Hi! I came across this interesting article and thought you might f...'
  // }
]

export const messagesOnChat: Message[] = [
  {
    sender: 5,
    text: '',
    image: 'https://i.pinimg.com/736x/f1/df/94/f1df9473b3e7346903d583acbf88b3d1.jpg',
    type: MessageType.image,
    time: Date.now() - 35000, // 35 giây trước,
    avatar:
      'https://s3-alpha-sig.figma.com/img/32d6/693f/2597806fe5ebd857dc3e5d9a1b9e1186?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fyWXhIYPGkJL4BvwI~akcsBJT9fjBFIU3DaIYvs~xyFQmtotnrcZGwjB2jcTL7Bhkct4FS6gMY065dmFTe4sUN6wRlwI2x0cqT7eDdsKRg9J2Y9JxfmrAjdKITtM2e8aZ~y9WPB3jUNy2aHKTVXdEClqn9DhOr1rsTniI5uGD2ejjheRTrHpAh5SikvVpiii5Y-hfOwcqY6nF6S9b62FZ2VVZE0gy1wR-HDsxt2mk9BJNL97NvC1H16Xkva0rYbqFBWPk4igv7pAqYki0vfZPBepOgW1vbeQpHyiwlW2aiTjedNu0rVNwmwOWu55XCMQnmFREdwYgJc-PJWngD3dOQ__',
    reacts: ['🙂']
  },
  {
    sender: 5,
    text: 'I think it would be great to have a seating area and a playground for kids. Make it welcoming for families.',
    type: MessageType.text,
    time: Date.now() - 40000, // 40 giây trước
    avatar:
      'https://s3-alpha-sig.figma.com/img/32d6/693f/2597806fe5ebd857dc3e5d9a1b9e1186?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fyWXhIYPGkJL4BvwI~akcsBJT9fjBFIU3DaIYvs~xyFQmtotnrcZGwjB2jcTL7Bhkct4FS6gMY065dmFTe4sUN6wRlwI2x0cqT7eDdsKRg9J2Y9JxfmrAjdKITtM2e8aZ~y9WPB3jUNy2aHKTVXdEClqn9DhOr1rsTniI5uGD2ejjheRTrHpAh5SikvVpiii5Y-hfOwcqY6nF6S9b62FZ2VVZE0gy1wR-HDsxt2mk9BJNL97NvC1H16Xkva0rYbqFBWPk4igv7pAqYki0vfZPBepOgW1vbeQpHyiwlW2aiTjedNu0rVNwmwOWu55XCMQnmFREdwYgJc-PJWngD3dOQ__',
    reacts: ['🙂']
  },
  {
    sender: 4,
    text: 'Great idea!👏🏼 Let’s interview families and residents to get few more ideas',
    type: MessageType.text,
    time: Date.now() - 45000, // 45 giây trước
    avatar:
      'https://s3-alpha-sig.figma.com/img/295e/3945/83cd6f5739dcbd92dd0b60a9813dcac3?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p3ApgKC-wIDEi-prfeYqDSqyXaBKdrPCA9~KGd4ZEE3z3E1fXS5jGbQtrH253Gt5G1SbsJ1wzFl6seiEbyrrMP-1oHwbmJrZGTwZodHrjFKOSWczv8RjmhBcX9REUmNNRb1~hjzIkTyNqaiwesByEdfgtAivAm70EPbwuDY4SF0ETW5uRipzzaiPoF8WkXw~MFaSBfEtGG0bVv79tozWo7nd~qEcpFSOXUL3aSPL0TcN97yEFDNxmqXvi2lCePWe2wTndSnmV1LaU7toKPf0AImgOqBG5WMxlCtucuYeJYeQDGw8R1IeRugsOQDa7ec-cdBhOKtw7~oe3mxh~10QNA__'
  },
  {
    sender: 1,
    text: 'Project plan for community garden',
    type: MessageType.file,
    time: Date.now() - 50000, // 50 giây trước
    avatar:
      'https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K36eaGQ9rlvQmHcgJfMlpNzISNo8yTIDAgg2HVcZg54Zl7doYhUE5IIcKZ8Fo-PtxlKYZiaAeVQmf3lcwC9NvafgMfcBZPsWJd4cPgKmxBgz070z9zrDeEdDSAmU7TWc97otZbxaF-HOmD2D84nqLqtDEfL0N4dnEJUw82lZaJ8vMXmK9cUb-iwVE4nFw84vUFdlqGHz9XR6v-HL4v8SJEY0fLGVXVQk32JG9hpXjyBFbd8ymYBPv8npT6RsgaIa~w3CO4mBVJ-CswqyxGIzjdSrw1TWzSdueJFEYURA0EYfQryANwc3-dtjRjKWp7pBGIER3NOkuC6hjh5q99rsmA__'
  },
  {
    sender: 3,
    text: 'Hi',
    type: MessageType.text,
    time: Date.now() - 56000, // 56 giây trước
    avatar:
      'https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K36eaGQ9rlvQmHcgJfMlpNzISNo8yTIDAgg2HVcZg54Zl7doYhUE5IIcKZ8Fo-PtxlKYZiaAeVQmf3lcwC9NvafgMfcBZPsWJd4cPgKmxBgz070z9zrDeEdDSAmU7TWc97otZbxaF-HOmD2D84nqLqtDEfL0N4dnEJUw82lZaJ8vMXmK9cUb-iwVE4nFw84vUFdlqGHz9XR6v-HL4v8SJEY0fLGVXVQk32JG9hpXjyBFbd8ymYBPv8npT6RsgaIa~w3CO4mBVJ-CswqyxGIzjdSrw1TWzSdueJFEYURA0EYfQryANwc3-dtjRjKWp7pBGIER3NOkuC6hjh5q99rsmA__'
  },
  {
    sender: 3,
    text: '',
    image:
      'https://s3-alpha-sig.figma.com/img/d2e1/4add/af1be26d0d66951106b99530e7468b20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l8t5p3bEp6iIHTGr5sJ0PXGsLayRhVWMNG0TxEvvpPSFx4AdJAKA2ctwYddNHG~N5wS7OqBqPCbLEEzTw8b7ewaGpS-Uj6uLgYXUwnZrDenA2Mymy~mGzfd1LwZcfeDBC48x1FGLgn45nR94Tj1EMfmRzDj7CbaHnUIxkM0SSvO6wQW24ZBRR27E8QwKPgHKcvXuNnNddfiAqnGhMcSAdWhbWDwBa2cPuADFyo37giT0MujrwIa2EPeW1Jt3sfjiZxgNjJcFvRYv-RRPlS-wFU-MoyeXmDSjIA2KleCsPX6QsW7dzR9PI7Ayvt5UGiyFaqenyocoCZouzkabwyaDfw__',
    type: MessageType.sticker,
    time: Date.now() - 56000, // 56 giây trước
    avatar:
      'https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K36eaGQ9rlvQmHcgJfMlpNzISNo8yTIDAgg2HVcZg54Zl7doYhUE5IIcKZ8Fo-PtxlKYZiaAeVQmf3lcwC9NvafgMfcBZPsWJd4cPgKmxBgz070z9zrDeEdDSAmU7TWc97otZbxaF-HOmD2D84nqLqtDEfL0N4dnEJUw82lZaJ8vMXmK9cUb-iwVE4nFw84vUFdlqGHz9XR6v-HL4v8SJEY0fLGVXVQk32JG9hpXjyBFbd8ymYBPv8npT6RsgaIa~w3CO4mBVJ-CswqyxGIzjdSrw1TWzSdueJFEYURA0EYfQryANwc3-dtjRjKWp7pBGIER3NOkuC6hjh5q99rsmA__'
  },
  {
    sender: 3,
    text: 'This looks great!😻 Let’s present this to BetterStride and see what they say',
    type: MessageType.text,
    time: Date.now() - 55000, // 55 giây trước
    avatar:
      'https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K36eaGQ9rlvQmHcgJfMlpNzISNo8yTIDAgg2HVcZg54Zl7doYhUE5IIcKZ8Fo-PtxlKYZiaAeVQmf3lcwC9NvafgMfcBZPsWJd4cPgKmxBgz070z9zrDeEdDSAmU7TWc97otZbxaF-HOmD2D84nqLqtDEfL0N4dnEJUw82lZaJ8vMXmK9cUb-iwVE4nFw84vUFdlqGHz9XR6v-HL4v8SJEY0fLGVXVQk32JG9hpXjyBFbd8ymYBPv8npT6RsgaIa~w3CO4mBVJ-CswqyxGIzjdSrw1TWzSdueJFEYURA0EYfQryANwc3-dtjRjKWp7pBGIER3NOkuC6hjh5q99rsmA__'
  },
  {
    sender: 2,
    text: 'I’ll put together a presentation. Greg I’ll need your help with this. Meet me tomorrow at the coffee shop at 9AM?',
    type: MessageType.text,
    time: Date.now() - 60000, // 1 phút trước
    avatar:
      'https://s3-alpha-sig.figma.com/img/872f/268b/64576b7d90a979bb57fb80d33272b843?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O-8~BfPR1EDKpcByABptDh7BtuvLfyUrXgVPSCzsd8TXxUUDIJT1n1rKRSimCoqVwCEWxN-BDlnLa~vSFGYG7WWJdvRCAEj88s0x0NlV~Jv3x1brBqDXXSy3-Ea21tnxnX2shgo2WTs4AZx9c27cfCIikEow4PFQvoBRAgfcNw9zNccgnBmqYdgUZ12dEzmod7zsq0PaJjo0YheTB4Mc~Jn-DaQ63ooZkeiIk4XeWKetApZnE1grT9U5qdwZzJ7PMfEFKzITICGr6q2kCXEekSmsyG-342pJ-Vf1rDVU9YfYKrk-~hWpk4mTUI~~Cw9wZFiP~o9L6qj~7B6y1jC3YA__',
    reacts: ['🙂', '🤌', '🙁']
  }
]

export const contactList: ContactList[] = [
  {
    id: 1,
    name: 'Mom',
    lastOnline: Date.now() - 35000, // 35 giây trước,
    img: 'https://s3-alpha-sig.figma.com/img/32d6/693f/2597806fe5ebd857dc3e5d9a1b9e1186?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fyWXhIYPGkJL4BvwI~akcsBJT9fjBFIU3DaIYvs~xyFQmtotnrcZGwjB2jcTL7Bhkct4FS6gMY065dmFTe4sUN6wRlwI2x0cqT7eDdsKRg9J2Y9JxfmrAjdKITtM2e8aZ~y9WPB3jUNy2aHKTVXdEClqn9DhOr1rsTniI5uGD2ejjheRTrHpAh5SikvVpiii5Y-hfOwcqY6nF6S9b62FZ2VVZE0gy1wR-HDsxt2mk9BJNL97NvC1H16Xkva0rYbqFBWPk4igv7pAqYki0vfZPBepOgW1vbeQpHyiwlW2aiTjedNu0rVNwmwOWu55XCMQnmFREdwYgJc-PJWngD3dOQ__'
  },
  {
    id: 2,
    name: 'Dad',
    lastOnline: Date.now() - 40000, // 40 giây trước
    img: 'https://s3-alpha-sig.figma.com/img/32d6/693f/2597806fe5ebd857dc3e5d9a1b9e1186?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fyWXhIYPGkJL4BvwI~akcsBJT9fjBFIU3DaIYvs~xyFQmtotnrcZGwjB2jcTL7Bhkct4FS6gMY065dmFTe4sUN6wRlwI2x0cqT7eDdsKRg9J2Y9JxfmrAjdKITtM2e8aZ~y9WPB3jUNy2aHKTVXdEClqn9DhOr1rsTniI5uGD2ejjheRTrHpAh5SikvVpiii5Y-hfOwcqY6nF6S9b62FZ2VVZE0gy1wR-HDsxt2mk9BJNL97NvC1H16Xkva0rYbqFBWPk4igv7pAqYki0vfZPBepOgW1vbeQpHyiwlW2aiTjedNu0rVNwmwOWu55XCMQnmFREdwYgJc-PJWngD3dOQ__'
  },
  {
    id: 3,
    name: 'Wiliam',
    lastOnline: Date.now() - 45000, // 45 giây trước
    img: 'https://s3-alpha-sig.figma.com/img/295e/3945/83cd6f5739dcbd92dd0b60a9813dcac3?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p3ApgKC-wIDEi-prfeYqDSqyXaBKdrPCA9~KGd4ZEE3z3E1fXS5jGbQtrH253Gt5G1SbsJ1wzFl6seiEbyrrMP-1oHwbmJrZGTwZodHrjFKOSWczv8RjmhBcX9REUmNNRb1~hjzIkTyNqaiwesByEdfgtAivAm70EPbwuDY4SF0ETW5uRipzzaiPoF8WkXw~MFaSBfEtGG0bVv79tozWo7nd~qEcpFSOXUL3aSPL0TcN97yEFDNxmqXvi2lCePWe2wTndSnmV1LaU7toKPf0AImgOqBG5WMxlCtucuYeJYeQDGw8R1IeRugsOQDa7ec-cdBhOKtw7~oe3mxh~10QNA__'
  },
  {
    id: 4,
    name: 'Katie',
    lastOnline: Date.now() - 50000, // 50 giây trước
    img: 'https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K36eaGQ9rlvQmHcgJfMlpNzISNo8yTIDAgg2HVcZg54Zl7doYhUE5IIcKZ8Fo-PtxlKYZiaAeVQmf3lcwC9NvafgMfcBZPsWJd4cPgKmxBgz070z9zrDeEdDSAmU7TWc97otZbxaF-HOmD2D84nqLqtDEfL0N4dnEJUw82lZaJ8vMXmK9cUb-iwVE4nFw84vUFdlqGHz9XR6v-HL4v8SJEY0fLGVXVQk32JG9hpXjyBFbd8ymYBPv8npT6RsgaIa~w3CO4mBVJ-CswqyxGIzjdSrw1TWzSdueJFEYURA0EYfQryANwc3-dtjRjKWp7pBGIER3NOkuC6hjh5q99rsmA__'
  },
  {
    id: 5,
    name: 'Kutie',
    lastOnline: Date.now() - 56000, // 56 giây trước
    img: 'https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K36eaGQ9rlvQmHcgJfMlpNzISNo8yTIDAgg2HVcZg54Zl7doYhUE5IIcKZ8Fo-PtxlKYZiaAeVQmf3lcwC9NvafgMfcBZPsWJd4cPgKmxBgz070z9zrDeEdDSAmU7TWc97otZbxaF-HOmD2D84nqLqtDEfL0N4dnEJUw82lZaJ8vMXmK9cUb-iwVE4nFw84vUFdlqGHz9XR6v-HL4v8SJEY0fLGVXVQk32JG9hpXjyBFbd8ymYBPv8npT6RsgaIa~w3CO4mBVJ-CswqyxGIzjdSrw1TWzSdueJFEYURA0EYfQryANwc3-dtjRjKWp7pBGIER3NOkuC6hjh5q99rsmA__'
  },
  {
    id: 6,
    name: 'Bray',
    lastOnline: Date.now() - 56000, // 56 giây trước
    img: 'https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K36eaGQ9rlvQmHcgJfMlpNzISNo8yTIDAgg2HVcZg54Zl7doYhUE5IIcKZ8Fo-PtxlKYZiaAeVQmf3lcwC9NvafgMfcBZPsWJd4cPgKmxBgz070z9zrDeEdDSAmU7TWc97otZbxaF-HOmD2D84nqLqtDEfL0N4dnEJUw82lZaJ8vMXmK9cUb-iwVE4nFw84vUFdlqGHz9XR6v-HL4v8SJEY0fLGVXVQk32JG9hpXjyBFbd8ymYBPv8npT6RsgaIa~w3CO4mBVJ-CswqyxGIzjdSrw1TWzSdueJFEYURA0EYfQryANwc3-dtjRjKWp7pBGIER3NOkuC6hjh5q99rsmA__'
  },
  {
    id: 7,
    name: 'Mixi',
    lastOnline: Date.now() - 55000, // 55 giây trước
    img: 'https://s3-alpha-sig.figma.com/img/081c/3a3e/2f863fdbdbae75fb5603562efd14bce0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K36eaGQ9rlvQmHcgJfMlpNzISNo8yTIDAgg2HVcZg54Zl7doYhUE5IIcKZ8Fo-PtxlKYZiaAeVQmf3lcwC9NvafgMfcBZPsWJd4cPgKmxBgz070z9zrDeEdDSAmU7TWc97otZbxaF-HOmD2D84nqLqtDEfL0N4dnEJUw82lZaJ8vMXmK9cUb-iwVE4nFw84vUFdlqGHz9XR6v-HL4v8SJEY0fLGVXVQk32JG9hpXjyBFbd8ymYBPv8npT6RsgaIa~w3CO4mBVJ-CswqyxGIzjdSrw1TWzSdueJFEYURA0EYfQryANwc3-dtjRjKWp7pBGIER3NOkuC6hjh5q99rsmA__'
  },
  {
    id: 8,
    name: 'Rambo',
    lastOnline: Date.now() - 60000, // 1 phút trước
    img: 'https://s3-alpha-sig.figma.com/img/872f/268b/64576b7d90a979bb57fb80d33272b843?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O-8~BfPR1EDKpcByABptDh7BtuvLfyUrXgVPSCzsd8TXxUUDIJT1n1rKRSimCoqVwCEWxN-BDlnLa~vSFGYG7WWJdvRCAEj88s0x0NlV~Jv3x1brBqDXXSy3-Ea21tnxnX2shgo2WTs4AZx9c27cfCIikEow4PFQvoBRAgfcNw9zNccgnBmqYdgUZ12dEzmod7zsq0PaJjo0YheTB4Mc~Jn-DaQ63ooZkeiIk4XeWKetApZnE1grT9U5qdwZzJ7PMfEFKzITICGr6q2kCXEekSmsyG-342pJ-Vf1rDVU9YfYKrk-~hWpk4mTUI~~Cw9wZFiP~o9L6qj~7B6y1jC3YA__'
  }
]
