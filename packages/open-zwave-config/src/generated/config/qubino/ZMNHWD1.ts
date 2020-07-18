import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0054:0001",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHWD1.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2552/",
            id: "0054",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "FACTORY RESET\n1. Connect the module to the power supply\n2. Press and hold the S (Service) button for at least 10 seconds\nNOTE: By resetting the module, all custom parameters previously set on the module will return to their default values, and owner ID will be deleted. Use this reset procedure only when the main controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Connect the module to the power supply\n2. Make sure the module is within direct range of your Z-Wave controller or use a hand-held Z-Wave remote to perform exclusion\n3. Press and release the S (Service) button 3 times within 2 seconds\nNOTE: The module will be excluded from your network, but any custom configuration parameters will not be erased.",
            name: "ExclusionDescription",
          },
          { text: "Flush RGBW Dimmer Switch Color R.G.B.W", name: "Name" },
          {
            text: "Flush RGBW Dimmer / ZMNHWD3",
            id: "0054",
            name: "Identifier",
            type: "0001",
          },
          {
            text:
              "1. Connect the module to the power supply\n2. Enable inclusion mode on your Z-Wave controller\n3. Press and release the S (Service) button 3 times within 2 seconds",
            name: "InclusionDescription",
          },
          {
            text:
              "Qubino Flush RGBW module is used to control RGB/RGBW strips and LED strips or bulbs to create countless colour options and has 5 special scene effects. It can also control halogen lights and fans. Its extremely small size allows for easy installation behind wall sockets and switches. Controlled devices may be powered by 12 or 24 VDC. All IN and OUT terminals may be user configured for LED control or 100 kΩ signal readouts.",
            name: "Description",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0054",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2552/Qubino_Flush RGBW Dimmer PLUS extended manual_eng_2.2.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2174/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2552/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text: "Add missing parameters and fix exiting",
                author: "Jean-Francois Auger - nechry@gmail.com",
                date: "27 Aug 2019",
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
            label: "Input IN1 configuration",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "4",
            Help: "",
            Item: [
              { label: "NORMAL mode – momentary switch type", value: "1" },
              { label: "NORMAL mode – toggle switch type", value: "2" },
              {
                label: "NORMAL mode – toggle with memory switch type",
                value: "3",
              },
              { label: "BRIGHTNESS mode – momentary switch type", value: "4" },
              { label: "BRIGHTNESS mode – toggle switch type", value: "5" },
              {
                label: "BRIGHTNESS mode – toggle with memory switch type",
                value: "6",
              },
              { label: "RAINBOW mode – momentary switch type", value: "7" },
              { label: "SCENE mode – momentary switch type", value: "8" },
              { label: "SCENE mode – toggle switch type", value: "9" },
              {
                label: "SCENE mode – toggle with memory switch type",
                value: "10",
              },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Input IN2 configuration",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "7",
            Help: "",
            Item: [
              { label: "NORMAL mode – momentary switch type", value: "1" },
              { label: "NORMAL mode – toggle switch type", value: "2" },
              {
                label: "NORMAL mode – toggle with memory switch type",
                value: "3",
              },
              { label: "BRIGHTNESS mode – momentary switch type", value: "4" },
              { label: "BRIGHTNESS mode – toggle switch type", value: "5" },
              {
                label: "BRIGHTNESS mode – toggle with memory switch type",
                value: "6",
              },
              { label: "RAINBOW mode – momentary switch type", value: "7" },
              { label: "SCENE mode – momentary switch type", value: "8" },
              { label: "SCENE mode – toggle switch type", value: "9" },
              {
                label: "SCENE mode – toggle with memory switch type",
                value: "10",
              },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Input IN3 configuration",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "8",
            Help: "",
            Item: [
              { label: "NORMAL mode – momentary switch type", value: "1" },
              { label: "NORMAL mode – toggle switch type", value: "2" },
              {
                label: "NORMAL mode – toggle with memory switch type",
                value: "3",
              },
              { label: "BRIGHTNESS mode – momentary switch type", value: "4" },
              { label: "BRIGHTNESS mode – toggle switch type", value: "5" },
              {
                label: "BRIGHTNESS mode – toggle with memory switch type",
                value: "6",
              },
              { label: "RAINBOW mode – momentary switch type", value: "7" },
              { label: "SCENE mode – momentary switch type", value: "8" },
              { label: "SCENE mode – toggle switch type", value: "9" },
              {
                label: "SCENE mode – toggle with memory switch type",
                value: "10",
              },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Input IN4 configuration",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "NORMAL mode – momentary switch type", value: "1" },
              { label: "NORMAL mode – toggle switch type", value: "2" },
              {
                label: "NORMAL mode – toggle with memory switch type",
                value: "3",
              },
              { label: "BRIGHTNESS mode – momentary switch type", value: "4" },
              { label: "BRIGHTNESS mode – toggle switch type", value: "5" },
              {
                label: "BRIGHTNESS mode – toggle with memory switch type",
                value: "6",
              },
              { label: "RAINBOW mode – momentary switch type", value: "7" },
              { label: "SCENE mode – momentary switch type", value: "8" },
              { label: "SCENE mode – toggle switch type", value: "9" },
              {
                label: "SCENE mode – toggle with memory switch type",
                value: "10",
              },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Auto Scene Mode Set",
            max: "6",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "Ocean", value: "1" },
              { label: "Lightning", value: "2" },
              { label: "Rainbow", value: "3" },
              { label: "Snow", value: "4" },
              { label: "Romantic", value: "5" },
              { label: "Party scene", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Auto Scene Mode – Duration between Colour change",
            max: "1127",
            min: "0",
            type: "short",
            value: "3",
            Help:
              "\n        This parameter is used to adjust time between 2 Colours in the Scene.\n        1-127 – delay duration is 1 sec to 127 sec.\n        1001-1127 – delay duration is from 1 min to 127 min. This parameter has no effect on lighting and Party Scene.",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Memorize device status at power cut",
            max: "1",
            min: "1",
            size: "1",
            type: "list",
            value: "0",
            Help: "Device will be set to status memorized before power cut.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Automatic turning off output after set time",
            max: "32536",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n        Output is turned automatically off after the time, set in this parameter.\n        0 – Auto OFF disabled.\n        1 – 32536 = 1 second – 32536 seconds Auto OFF.\n      ",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Automatic turning on output after set time",
            max: "32536",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "\n        Output is turned automatically on after the time, set in this parameter.\n        0 – Auto ON disabled.\n        1 – 32536 = 1 second – 32536 seconds Auto ON.\n      ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "MAX dimming value",
            max: "99",
            min: "2",
            size: "1",
            type: "byte",
            units: "%",
            value: "99",
            Help: "",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "MIN dimming value",
            max: "98",
            min: "1",
            size: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "NOTE: The minimum level may not be higher than the MAX dimming value.",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Dimming time (soft on/off)",
            max: "25",
            min: "5",
            size: "1",
            type: "byte",
            units: "0.1 seconds",
            value: "10",
            Help:
              "\n        Default value 10 = 1 s.\n        5–25 = from 0.5 to 2.5 seconds",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Dimming time when key pressed",
            max: "127",
            min: "1",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "3",
            Help:
              "\n        1–127 = from 1 to 127 seconds.\n        NOTE: Dimming time depends also on Min and Max dimming value.\n      ",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "4 Dimmers mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n        NOTE: If the parameter no. 14 is enabled, parameter no. 1,2,3,4 has no effect.\n        NOTE: After parameter change, first exclude device (without setting parameters to default value) and then re include the device.\n      ",
            Item: [
              { label: "Four dimmers mode disabled", value: "0" },
              {
                label: "Four dimmers mode enabled – momentary switch type",
                value: "1",
              },
              {
                label: "Four dimmers mode enabled – toggle switch type",
                value: "2",
              },
              {
                label:
                  "Four dimmers mode enabled – toggle with memory switch type",
                value: "3",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
