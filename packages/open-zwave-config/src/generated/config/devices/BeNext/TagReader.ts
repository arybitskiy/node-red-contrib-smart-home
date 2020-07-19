import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/008A:0100:0007",
            name: "OzwInfoPage",
          },
          { text: "images/BeNext/TagReader.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/43/",
            id: "0100",
            name: "ZWProductPage",
            type: "0007",
          },
          { text: "info@benext.eu", name: "ProductSupport" },
          {
            text: "http://www.benext.eu/en/products/tag-reader/",
            name: "ProductPage",
          },
          {
            text: "CEPT (Europe)",
            id: "0100",
            name: "FrequencyName",
            type: "0007",
          },
          { text: "Tag Reader", name: "Name" },
          {
            text: "BeNext / TagReader",
            id: "0100",
            name: "Identifier",
            type: "0007",
          },
          {
            text:
              "By reading your RFID-Tag or pressing a manual code you are able to arm or disarm your security system. The Tag Reader can read multiple RFID-tags protocols. With the sound of the buzzer you will easily hear and see if your action was valid.\n\nPlace the Tag Reader close to the main exit of your office or home to enjoy it’s full potential.\nWith the Tag Reader you can activate or de-activate your security by simply passing the RFID Tag in front of the reader. It is called a Tag Reader because it uses RFID Tags to identify people and their personal preferences around leaving the house or coming home.\n\nSeparately from working with RFID Tags, the Tag Reader also has a numerical keypad. Within the free of charge online manager you can configure a numerical code. This way you prevent being locked out of the system in case you may have lost the RFID Tag.\n\nBy using the Tag Reader intelligently you can secure your house and save money on your energy bill at the same time. You can actually let your house ‘fall asleep’ when enabling the ‘Away Scene’. This is especially noted when u are using energy saving products of BeNext such as Radiator Control and of course a Energy Switch.\n- The TagReader has the possibility for the user to manually insert codes.\n- The TagReaders indicator light will react differently on each action.\n- The TagReader has a buzzer, which can be used as walk-in/walk-out notification \n(alarm is being disabled/activated).\n\n- arm/disarm a security system. \n- Battery operated device for easy mounting on any place. \n- Multiple tags support ISO15693, ISO18000-3, Tag-it™ \n- Easy installation with NWI - get in control of your alarm system.\n\nThe dimensions are 6 x 6 x 2 cm (LxBxH). The color of the product is traffic White, RAL 9016.\nSwitch between the scenes ‘Home’ and ‘Away’ easily and initiate security measures or instead de-activate them easily without use of complicated coding\n• Let your house ‘wake up’ or instead ‘fall asleep’. This way you can save enormously on your energy bill\n• Product dimensions: 62 x 62 x 20 millimeter (L x W x H)\n• Normal operating voltage: 2x AA 1.5V batteries. From 2.3Vdc to 4.0Vdc. Do not use rechargeable batteries\n• Battery lifetime: normal usage will give approximately a lifetime of 5 years. Notice: long and big networks will increase the battery lifetime\n• Protocols supported: ISO15693, ISO18000-3, Tag-it™, RFID\n• Buzzer-sound: approximately 60dB at 10 centimeters distance",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/43/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Set to Default",
            type: "byte",
            value: "-1",
            Help:
              "Set all configuration values to default values (factory settings).",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Feedback Time",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "To configure the time the beep is automatically turned off in seconds.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Endless", value: "-1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Feedback Timeout",
            type: "byte",
            value: "0",
            Help:
              "To configure the timeout to wait for a WAKEUP_NO_MORE_INFORMATION before the error beep is automatically sound. The error beeps are fixed 8 beeps shortly after each other.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Feedback Beeps per Second",
            type: "byte",
            value: "2",
            Help:
              "To configure the number of beeps per second. Every beep is fixed about 10ms.",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "The Mode",
            type: "byte",
            value: "1",
            Help:
              "To configure the operating mode. If any mode other then 3, that value will be reported after a get but will be handled in SW as mode 1.",
            Item: [
              { label: "Mode 1: Normal operating mode.", value: "1" },
              {
                label:
                  "Mode 3: Z-Wave chip is always on to request e.g. version or manufacturer id.",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "RFID circuit startup time",
            type: "byte",
            value: "100",
            Help:
              "The time (*10 ms) that the RFID circuit is started after home or away is pressed (default 100 = 100*10ms=1s)",
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      { id: "99", Compatibility: [{ ExposeRawUserCodes: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Group 1", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
