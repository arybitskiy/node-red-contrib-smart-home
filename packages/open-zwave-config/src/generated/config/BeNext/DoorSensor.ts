import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/008A:0100:0004",
            name: "OzwInfoPage",
          },
          { text: "images/BeNext/DoorSensor.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/75/",
            id: "0100",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "A 2-in-1 product The primary function of the Door Sensor is detecting the status of a door or window. Due to it’s build in thermometer you can also measure temperature on that location. Use the Door Sensor for; - Security - Comfort -Lighting - Automation and Saving money.\n- Temperature sensor inside\n- External contact for additional sensor or doorbell-push button\n\nUse The Door Sensor for securing and/or enlarging luxury and automation in your home or office. Receive notifications when unwanted activities are being triggered and keep your room temperature on level due to the build-in thermometer. Make up your own rules in the free of charge online manager so that your preferences are automated when simply opening your front door.\nThe primary function of the Door Sensor is detecting the status of a door or window. In combination with our Alarm Sound you can configure rules that enable an alarm when doors or windows are opened unwanted. Broaden functionalities by making your own rules. Make it happen that when you leave your bedroom, any preferred devices and custom scenes switch on and off, depending on the time of day.\n\n- Long battery operation time - Temperature sensor - Extra external contact - Good priced\n\nThe dimensions are 3,3 x 5,8 x 1,8cm (LxBxH). The color of the product is traffic White, RAL 9016. Electrical specs can be found on http://www.benext.eu/en/products/door-sensor/\n• Measure the open and/or closed status of doors and windows in your office or home\n• Measure temperature\n• Set up a basic security system by simply adding more sensors\n• Receive notifications on your phone and email when there is registered activity\n• Make up a variety of rules to add functionality to your home\n• Use for security and adding luxury to your office or home\n• Save on your energy bills by reducing unwanted usage of heating\n• Product dimensions: Door Sensor = 58 x 33 x 17 millimeter. Magnet = 58 x 11 x 17 millimeter (L x W x H)\n• Normal operating voltage: 2x AAA 1,5V batteries. From 2,3 to 4,0Vdc. Do not use rechargeable batteries\n• Battery lifetime: approximately 5 years by normal usage. Approximately 3~4 years by long networks and heavily usage\n• Absolute maximum temperature: -15°C to +85°C",
            name: "Description",
          },
          {
            text: "www.benext.eu/en/products/door-sensor",
            name: "ProductPage",
          },
          { text: "Info@Benext.eu", name: "ProductSupport" },
          { text: "Door Sensor", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0100",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "BeNeXt / Door Sensor",
            id: "0100",
            name: "Identifier",
            type: "0004",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/75/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            label: "External Contact",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Configure what the external contact sends when triggered. (Default: 0)",
            Item: [
              { label: "Send a alarm report with type 2.", value: "0" },
              {
                label:
                  "Send a Basic set frame to all nodes in association group 2.",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Not used",
            type: "byte",
            value: "0",
            Help: "Is not used but can still be set and requested.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Not used",
            type: "byte",
            value: "0",
            Help: "Is not used but can still be set and requested.",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "The Mode",
            type: "byte",
            value: "1",
            Help: "To configure the operating mode. (Default: 1)",
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
            label: "Temperature offset",
            type: "int",
            value: "0",
            Help:
              "A signed integer to determine the offset of the temperature. (Default: 0)",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Extern Contact Debounce ON",
            type: "byte",
            value: "0",
            Help:
              "Debounce time when the external contact is opened. (Default: 0)",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Extern Contact Debounce OFF",
            type: "byte",
            value: "0",
            Help:
              "Debounce time when the external contact is opened. (Default 0)",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Wake up delay",
            type: "byte",
            value: "0",
            Help:
              "A delay from the wake up time to give the external contact a chance to change his status. (Default 0, value * 100 ms, 0 - 25,5 seconds)",
          },
        ],
      },
      { id: "113", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              {
                index: "1",
                label: "Internal door contact",
                max_associations: "5",
              },
              {
                index: "2",
                label: "External door contact",
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
