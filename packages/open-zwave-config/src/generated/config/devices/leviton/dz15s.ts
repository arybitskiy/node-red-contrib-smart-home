import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/001D:0001:3401",
            name: "OzwInfoPage",
          },
          { text: "images/leviton/dz15s.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1957/",
            id: "0001",
            name: "ZWProductPage",
            type: "3401",
          },
          {
            text:
              "When removing a device from a Z-Wave® network best practice is to use the exclusion command found in the Z-Wave® controller.\n• Enter Programming Mode by holding the control button for 7 seconds, the Locator LED will turn amber.\n• Follow directions in the Z-Wave® controller to enter exclusion mode.\n• Tap the control button one time. The Locator LED will quickly flash green.\nThe Z-Wave® controller will exclude the Decora Smart device.\n• The Z-Wave® controller will confirm successful exclusion from the network.",
            name: "ExclusionDescription",
          },
          { text: "DZ15S", id: "0001", name: "Identifier", type: "3401" },
          {
            text:
              "The wireless Leviton DZPA1 is a Z-Wave enabled plug-in outlet designed for use for most residential applications to control plug-in lamps, holiday lighting, or small appliances. The DZPA1 Plug-In Outlet is fully compatible with Z-Wave Plus certified controllers.  Offers manual control to turn loads on/off.  Manufacturer Parameters allow custom configuration via Z-Wave commands.  Rated for 5A LED and CFL bulbs, 1800W incandescent bulbs, 1800W Fluorescent, 15A Resistive, and 1/2 HP Motor.   These Z-Wave Plus devices support beaming, network wide inclusion, and over the air updates.",
            name: "Description",
          },
          {
            text:
              "Leviton Decora SmartTM Z-Wave® devices support two methods of inclusion.\nWhen using a Z-Wave PlusTM certified controller choose Network Wide Inclusion.\nNetwork Wide Inclusion:\nNetwork Wide Inclusion allows your device to be added to the network using devices already in the network to assist with communication. Work your way from the closest devices to the controller outward.\n• Enter Programming Mode by holding the control button for 7 seconds, the Locator LED will blink amber.\n• Tap the control button one time.\nThe Locator LED will quickly flash green.\n• The Decora SmartTM Z-Wave® device is ready to learn into the Z-Wave® network.\n• Follow directions in the Z-Wave® controller to complete the adding process.\n• Upon successful addition to network the LED will turn off and then blink green 3 times.\n• If the adding process is not successful the LED will flash red 3 times.\nTraditional Inclusion:\nFor older controllers Traditional Inclusion is supported. Depending on the age of the controller the controller will need to be 3 to 35 feet from the device when including.\n• Enter Programming Mode by holding the control button for 7 seconds, the Locator LED will blink amber.\n• The Decora SmartTM Z-Wave® device is ready to add to the Z-Wave® network.\n• Follow directions in the Z-Wave® controller to enter learn mode.\n• Tap the control button one time. The Locator LED will quickly flash green.\nThe Z-Wave® controller will begin to pair with the Decora Smart device.\n• Upon successful addition to the network the LED will turn off and then blink green 3 times.\n• If the adding process is not successful the LED will flash red 3 times.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1959/DI-000-DZPA1-02B-X4.pdf",
            name: "ProductManual",
          },
          {
            text:
              "When removing a device from a network it is best practice to use the Exclusion process. In situations where a device needs to be returned to factory default follow the following steps. A reset should only be used when a controller is inoperable or missing:\n• Holding the control button for a total of 14 seconds.\n- After the first 7 seconds the LED turns amber.\n- The Locator LED will quickly flash red/amber after 14 seconds.\n• Release the control button and the device will reset.",
            name: "ResetDescription",
          },
          { text: "Plug-In Outlet", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "3401",
          },
          {
            text: "https://products.z-wavealliance.org/products/1959/",
            id: "0001",
            name: "ZWProductPage",
            type: "3601",
          },
          { text: "DZPA1", id: "0001", name: "Identifier", type: "3601" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "3601",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1957/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1959/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
              { label: "Off", value: "0" },
              { label: "Status Mode", value: "254" },
              { label: "Locator Mode", value: "255" },
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
