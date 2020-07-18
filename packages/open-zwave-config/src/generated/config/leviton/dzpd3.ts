import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001D:0001:3501",
            name: "OzwInfoPage",
          },
          { text: "images/leviton/dzpd3.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1958/",
            id: "0001",
            name: "ZWProductPage",
            type: "3501",
          },
          { text: "DZPD3", id: "0001", name: "Identifier", type: "3501" },
          {
            text:
              "When removing a device from a Z-Wave® network best practice is to use the exclusion command found in the Z-Wave® controller.\n• Enter Programming Mode by holding the control button for 7 seconds, the Locator LED will turn amber.\n• Follow directions in the Z-Wave® controller to enter exclusion mode.\n• Tap the control button one time. The Locator LED will quickly flash green.\nThe Z-Wave® controller will exclude the Decora Smart device.\n• The Z-Wave® controller will confirm successful exclusion from the network.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Leviton Decora Smart Z-Wave® devices support two methods of inclusion.\nWhen using a Z-Wave Plus certified controller choose Network Wide Inclusion.\nNetwork Wide Inclusion:\nNetwork Wide Inclusion allows your device to be added to the network using devices already in the network to assist with communication. Work your way from the closest devices to the controller outward.\n• Enter Programming Mode by holding the control button for 7 seconds, the Locator LED will blink amber.\n• Tap the control button one time.\nThe Locator LED will quickly flash green.\n• The Decora Smart Z-Wave® device is ready to learn into the Z-Wave® network.\n• Follow directions in the Z-Wave® controller to complete the adding process.\n• Upon successful addition to network the LED will turn off and then blink green 3 times.\n• If the adding process is not successful the LED will flash red 3 times.\nTraditional Inclusion:\nFor older controllers Traditional Inclusion is supported. Depending on the age of the controller the controller will need to be 3 to 35 feet from the device when including.\n• Enter Programming Mode by holding the control button for 7 seconds, the Locator LED will blink amber.\n• The Decora Smart Z-Wave® device is ready to add to the Z-Wave® network.\n• Follow directions in the Z-Wave® controller to enter learn mode.\n• Tap the control button one time. The Locator LED will quickly flash green.\nThe Z-Wave® controller will begin to pair with the Decora Smart device.\n• Upon successful addition to the network the LED will turn off and then blink green 3 times.\n• If the adding process is not successful the LED will flash red 3 times.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1958/DI-000-DZPD3-02B-X4.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The wireless Leviton DZPD3 is a Z-Wave enabled plug-in dimmer designed for use for most residential lighting applications to control LED, CFL, and incandescent bulbs. The DZPD3 Dimmer is fully compatible with Z-Wave Plus certified controllers. Provides full range dimming with adjustable fade rates.  Manufacturer Parameters allow custom configuration via Z-Wave commands.  Rated for 100W LED and CFL dimmable bulbs and 300W incandescent bulbs.  These Z-Wave Plus devices support beaming, network wide inclusion, and over the air updates.",
            name: "Description",
          },
          {
            text:
              "When removing a device from a network it is best practice to use the Exclusion process. In\nsituations where a device needs to be returned to factory default follow the following steps.\nA reset should only be used when a controller is inoperable or missing:\n• Holding the control button for a total of 14 seconds.\n- After the first 7 seconds the LED turns amber.\n- The Locator LED will quickly flash red/amber after 14 seconds.\n• Release the control button and the device will reset.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "3501",
          },
          { text: "Plug-In Dimmer", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1958/xml",
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
            label: "Fade On Time",
            max: "253",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "2",
            Help:
              "The amount of time to take to fade the lights from off to on.  A value of zero is instant (no fade), values between 1 and 127 represent 1 to 127 seconds, and values from 128 to 253 represent from 1 to 126 minutes.",
            Item: [{ label: "Instant On", value: "0" }],
          },
          {
            genre: "config",
            index: "2",
            label: "Fade Off Time",
            max: "253",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "2",
            Help:
              "The amount of time to take to fade the lights from on to off.  A value of zero is instant (no fade), values between 1 and 127 represent 1 to 127 seconds, and values from 128 to 253 represent from 1 to 126 minutes.",
            Item: [{ label: "Instant Off", value: "0" }],
          },
          {
            genre: "config",
            index: "3",
            label: "Minimum Light Level",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "10",
            Help: "Smallest dimming value permitted.",
          },
          {
            genre: "config",
            index: "4",
            label: "Maximum Light Level",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "100",
            Help: "Largest dimming value permitted.",
          },
          {
            genre: "config",
            index: "7",
            label: "Locator LED Status",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "255",
            Help:
              "Change the mode of the LED to Status Mode where the LED is illuminated when the load is On, Locator Mode where the LED is illuminated when the Load is Off, or turns off the LED completely for any other setting values.",
            Item: [
              { label: "LED Off", value: "0" },
              { label: "Status Mode", value: "254" },
              { label: "Locator Mode", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Load Type",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Specify the type of load that this dimmer controls.",
            Item: [
              { label: "Incandescent", value: "0" },
              { label: "LED", value: "1" },
              { label: "CFL", value: "2" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "5" }],
          },
        ],
      },
      { id: "134", Compatibility: [{ ClassGetVersionSupported: [false] }] },
    ],
  },
};

export default config;
