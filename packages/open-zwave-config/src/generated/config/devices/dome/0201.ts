import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/021F:0201:0003",
            name: "OzwInfoPage",
          },
          { text: "images/dome/0201.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2830/",
            id: "0201",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "The Dome Door/Window Sensor Pro is a battery powered security-enabled* Z-Wave Plus magnetic reed switch that can monitor the status of doors, windows, and anything else that opens and closes.  It can also report ambient temperature levels.  The Door/Window Sensor consists of two parts - the “sensor,” and the “magnet.”  The sensor has a “reed switch” inside, which is sensitive to the magnet’s presence when aligned properly and within the defined distance.  When the sensor and magnet are brought together or pulled apart, the sensor will report its open/close status to its Z-Wave controller, and the encrypted wireless communication* ensures that user data remains secure. Because many manufacturers use Z-Wave to communicate, the Door/Window Sensor can interact with different products of different categories.\n\n• Z-Wave Plus Certified\n• S0 Security-Enabled*\n• Built-In Temperature Sensor\n• Up to 250’ range\n• Ten-Year Battery Life\n• LED Signal Strength Indication\n• 1.25” Max distance between sensor & magnet\n• Ultra-Narrow (1/4”) Magnet for Placement Between Door and Casing\n• Monitor doors, windows, medicine cabinets, drawers, garage doors, and many other openings",
            name: "Description",
          },
          {
            text:
              "Because the Door/Window Sensor Pro is a battery powered device, it wakes up on regular intervals to give battery and other status updates to the controller, as well as to accept configuration settings from the controller.  This helps to extend the battery life.  The Sensor Cover holds down the Button when installed, and the device can be forced to wake up to submit reports or accept new settings immediately by simply removing the Sensor Cover and then replacing it after.  If the device is already included in a system, the LED Indicator will flash Red until the cover is closed.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2830/Gen2DWAPIManualv1.2_1.pdf",
            name: "ProductManual",
          },
          { text: "Dome Door/Window Sensor Pro", name: "Name" },
          {
            text:
              "If needed, the Door/Window Sensor Pro can be reset locally by following these steps.  Only do this if your Z-Wave controller is missing or otherwise unreachable.  Beware that resetting your device will disconnect it from the system:\n1. Remove the Sensor Cover and confirm that your Door/Window Sensor Pro is powered up.\n2. Wait for 5 seconds.\n3. Move the Magnet and Sensor Base in and out of the closed position 6 times.\n4. The LED Indicator will light up red for five seconds when reset successfully.\n\nThe Door/Window Sensor Pro memory will be erased to factory settings.",
            name: "ResetDescription",
          },
          {
            text:
              "U.S. / Canada / Mexico / CEPT (Europe) / Australia / New Zealand",
            id: "0201",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "DMDP1", id: "0201", name: "Identifier", type: "0003" },
          {
            text:
              "Follow the instructions for your Z-Wave Certified Controller to enter exclusion mode.  When prompted by the controller:\nRemove the SENSOR COVER and the LED Indicator will start blinking red.\nPress the Button quickly 3 times in a row.\nThe LED Indicator will flash green three times indicating exclusion/disconnection and will then continue flashing red (indicating tamper) until the cover is replaced.",
            name: "ExclusionDescription",
          },
          {
            text:
              "New Installation\n1. For proper inclusion, bring the Door/Window Sensor Pro to the final location where it will be used*.\n2. Follow the instructions for your Z-Wave controller to enter inclusion mode.\n3. Remove the Battery Tab protruding from the Battery Tab Slit.\n4. The device will automatically enter inclusion mode for two minutes and the LED Indicator will alternate between green and red.\n\nUpon successful inclusion the LED Indicator will flash green three times then stop blinking.\n\nRe-Installation\n1. For proper inclusion, bring the Door/Window Sensor Proto the final location where it will be used*.\n2. Follow the instructions for your Z-Wave controller to enter inclusion mode.\n3. Remove the Sensor Cover and the LED Indicator will start blinking yellow.\n4. Press the Button quickly 3 times in a row.\n5. The device will enter inclusion mode for two minutes and the LED Indicator will alternate between green and red.\n\nAfter successful inclusion, the LED Indicator will flash green three times then blink red until the cover is replaced.\n\n*For non Z-Wave Plus networks, please consult the owner’s manual for your primary controller to determine the best method and location for adding the Door/Window Sensor Pro to your Z-Wave network.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2399/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2829/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2830/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
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
            label: "Indicator LED",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "level",
            value: "1",
            Help:
              "\n        This parameter enables or disables the LED Indicator flashing to indicate opening and closing events.\n        The Door/Window Sensor will always flash the LED Indicator for inclusion, exclusion, tamper, and other system events.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Open/Close Reports Sent",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "level",
            value: "0",
            Help:
              "\n        This parameter switches the Notification or Binary Sensor report sent when the door opens or closes.\n        If this parameter is set to 01, the Door/Window Sensor will report closed instead of open when the Magnet and Sensor are pulled apart.\n      ",
            Item: [
              { label: "Reports Closed when Magnet is close", value: "0" },
              { label: "Reports Open when Magnet is close", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Report Command Classes",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "level",
            value: "0",
            Help:
              "\n        By default, the Door/Window Sensor uses the Notification command class to communicate open/close and tamper events.\n        If this Parameter is set to 1, the device will instead use the Binary Sensor command class.\n      ",
            Item: [
              { label: "Notification and Binary Sensor", value: "0" },
              { label: "Notification", value: "1" },
              { label: "Binary Sensor", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Temperature sensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "level",
            value: "0",
            Help:
              "\n        The Door/Window Sensor can also monitor and report ambient temperature conditions.\n        However, temperature sensing functionality is disabled by default to save battery life, and this configuration parameter is used to enable or disable this feature.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Temperature Offset",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n        This Configuration Parameter can offset the temperature value reported by +/- 125 degrees to compensate for temperature variances in a room - for example, the temperature near the ceiling in a room is significantly higher than the average temperature of the same room.\n        This Parameter accepts a signed 8-bit value with an absolute value of up to 125, and its units are Dependant on Configuration Parameter 07.\n        Temperature Offset.\n        0 to 125 : 0 to 125 degrees.\n        255 to 130 : -1 to -125 degrees.\n      ",
          },
          {
            genre: "config",
            index: "6",
            label: "Temperature Units",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "level",
            value: "0",
            Help:
              "The Door/Window Sensor can report temperature values in either Celsius or Fahrenheit, and this parameter allows the user to decide which unit is used.",
            Item: [
              { label: "Fahrenheit", value: "0" },
              { label: "Celsius", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Group 2 Basic Set Value",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "\n        This parameter sets the value sent by the Basic Set command to Association Group 2 (for more information, see Association Group Info.).\n        0 Turn Off Device.\n        1 to 99 Set Device to Value.\n        255 Turn On Device.\n      ",
          },
          {
            genre: "config",
            index: "8",
            label: "Group 4 Basic Set Level Opening",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "\n        This parameter sets the value sent by the Basic Set command to Association Group 4.\n        The Door/Window Sensor sends a Basic Set command to Association Group 4 when the door or window opens (for more information, see Association Group Info.).\n        0 Turn Off Device.\n        1 to 99 Set Device to Value.\n        255 Turn On Device.\n      ",
          },
          {
            genre: "config",
            index: "9",
            label: "Group 4 Basic Set Level Closing",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n        This parameter sets the value sent by the Basic Set command to Association Group 4.\n        The Door/Window Sensor sends a Basic Set command to Association Group 4 when the door or window opens (for more information, see Association Group Info.).\n        0 Turn Off Device.\n        1 to 99 Set Device to Value.\n        255 Turn On Device.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Tamper Basic Set", max_associations: "5" },
              {
                index: "3",
                label: "Tamper Notification Report",
                max_associations: "5",
              },
              { index: "4", label: "Sensor Basic Set", max_associations: "5" },
              {
                index: "5",
                label: "Sensor Notification Report",
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
