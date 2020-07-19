import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/021F:0086:0003",
            name: "OzwInfoPage",
          },
          { text: "images/dome/0086.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1847/",
            id: "0086",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "The Dome™ Home Automation DMMZ1 Mouser is a powerful rodent electric trap with Z-Wave technology built-in. It kills mice, rats and other rodents quickly, cleanly and humanely with a powerful jolt of electricity. Simply set bait, turn on and place in desired location. When connected to Z-Wave Certified Hub, once the trap is full, it sends out a notification to your smarthome system. You can easily dispose of Mouser’s contents without ever having to touch them. Use the top handle and tip to dispose of caught rodents. Specially designed removable and washable bait tray will allow you to easily replace the bait and set it back up. It operates on 4 AA batteries (not included) and is optimised to last over 50 uses. Mouser features extra-long Z-Wave wireless range (up to 150 ft) and  Dome™ DMMZ1 Mouser comes with a 1-year limited warranty. Measurements in inches: 8.75 x 4.5 x 5. Dome™ Home Automation Z-Wave devices give your family peace of mind and security you can count on. With Dome™, you’re always connected and always covered.\n•\tHumanely kills mice, rats and other rodents with a powerful electric shock and sends an alert to your smarthome system when the trap needs to be emptied\n•\tEasy to use: set bait, turn on and place in desired location \nTouch free: hold handle and tip to dispose of contents, then set it again\n•\tUp to 150-foot Z-Wave range. Operating Temperature: 32°F - 112°F. Powered by 4 AA batteries (not included) enabling it to be triggered over 50 times  \n•\tZ-Wave Plus Certified. Works as a stand alone electronic mouse trap  but requires a Z-Wave Certified Hub for notification functionality\n•\tTested to work with SmartThings, Vera, Staples Connect, HomeSeer, Nexia, Piper, URC, Harmony. Not supported by Wink, DSC, ADT Pulse, 2Gig, Napco, Interlogix, Honeywell (Dome is not associated with listed brands)",
            name: "Description",
          },
          {
            text:
              "Follow the instructions for your Z-Wave Certified controller to enter inclusion mode.  When prompted by the controller:\n1. Bring the Mouser to within 10’ of your Z-Wave controller for the inclusion process.  After successful pairing, the device can be brought to the desired location.\n2. Remove top cover by sliding it back and lifting up.\n3. Insert batteries.\n4. Press the CONNECT BUTTON quickly 3 times in a row.\n5. The LED INDICATOR will flash five times indicating inclusion",
            name: "InclusionDescription",
          },
          {
            text:
              "If needed, the Mouser can be reset locally by following these steps.  Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system:\n1. Remove the TOP COVER and confirm that your Mouser is powered up.\n2. Press and hold the CONNECT BUTTON for at least 10 seconds then release.  A flashing LED INDICATOR indicates a successful factory reset. \n3. The Mouser’s memory will be erased to factory settings.",
            name: "ResetDescription",
          },
          { text: "DMMZ1", id: "0086", name: "Identifier", type: "0003" },
          {
            text:
              "If needed, the Mouser can be reset locally by following these steps.  Only do this when your Z-Wave controller is disconnected or otherwise unreachable.  Beware that resetting your device will disconnect it from the system:\n1. Remove the TOP COVER and confirm that your Mouser is powered up.\n2. Press and hold the CONNECT BUTTON for at least 10 seconds then release.  A flashing LED INDICATOR indicates a successful factory reset. \n3. The Mouser’s memory will be erased to factory settings.",
            name: "WakeupDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0086",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text:
              "Follow the instructions for your Z-Wave Certified controller to enter exclusion mode.\nWhen prompted by the controller:\n1. Remove top cover by sliding it back and lifting up.\n2. Press the CONNECT BUTTON quickly 3 times in a row.\nThe LED INDICATOR will flash five times indicating exclusion/disconnection.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1847/Mouser API Manual.pdf",
            name: "ProductManual",
          },
          { text: "Dome Mouser", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1847/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
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
            label: "Basic Set Level",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "\n        This parameter defines the value sent by the BASIC_SET command to Association Group 2.\n        0 Turn Off Device.\n        1 to 99 Set Device to Value.\n        255 Turn On Device.\n      ",
          },
          {
            genre: "config",
            index: "2",
            label: "Set Firing Mode",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n        This parameter sets firing mode of the Mouser.\n        Two firing modes are available: in the first (Continuous Fire,) electricity is passed continuously for the entire duration,\n        and in the second (Burst Fire,) electricity is passed continuously only for the first minute and it is pulsed at approximately 400 beats per minute for the remainder of the time.\n      ",
            Item: [
              { label: "Continuous Fire", value: "1" },
              { label: "Burst Fire", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "High Voltage Duration Time",
            max: "360",
            min: "100",
            size: "2",
            type: "short",
            units: "Seconds",
            value: "100",
            Help:
              "\n        This parameter defines how long the Mouser will fire continuously before it starts to burst-fire\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "LED Alarm",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n        This parameter enables or disables the indicator LED alarm when the trap is tripped.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "LED Alarm Duration",
            max: "255",
            min: "1",
            size: "1",
            type: "byte",
            units: "Hours",
            value: "0",
            Help:
              "\n        This parameter sets the amount of time the LED Indicator blinks after the trap is tripped.\n        0 LED Blinks Until Trap is Reset.\n        1 to 255 in Hours.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Set", max_associations: "5" },
              {
                index: "3",
                label: "Notification Report",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Sensor Binary Report",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
