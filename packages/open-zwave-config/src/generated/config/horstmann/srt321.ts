import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0059:0005:0001",
            name: "OzwInfoPage",
          },
          { text: "images/horstmann/srt321.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1563/",
            id: "0005",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              'STEP 1: On the SRT321, Set DIL switch 1 on the back of the unit to \'ON\' position, scroll through the function menu by rotating the dial, select "E" and press the dial to activate Exclusion process. Now the character "E" starts flashing.\nSTEP 2: On the 3rd party device, select Exclusion for removing device from SRT321\'s network.\nAfter successful Exclusion SRT321 displayed "EP" other wise displayed "EF" (Exclusion fail).\nNote: Once the character starts flashing the installer has 60 seconds to activate the 3rd party device.\nAfter successful Exclusion set DIL switch 1 to \'OFF\' position to operate SRT321 in normal operation.\nIf the Exclusion process has failed more than once, try moving the SRT321 to another position and repeat the Exclusion steps.',
            name: "ExclusionDescription",
          },
          { text: "SRT-321 (Thermostat-HVAC)", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0005",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              'STEP 1: On the SRT321, set DIL switch 1 on the back of the unit to \'ON\' position, scroll through the function menu by rotating the dial, select "I" and press the dial to activate Inclusion process. Now the character "I" starts flashing.\nSTEP 2: On the 3rd party device, select Inclusion for adding a device into SRT321\'s network.\nAfter successful inclusion SRT321 displayed "IP" other wise displayed "IF" (Inclusion fail).\nNote: Once the character starts flashing the installer has 60 seconds to activate the 3rd party device.\nAfter successful Inclusion set DIL switch 1 to \'OFF\' position to operate SRT321 in normal operation.\nIf the inclusion process fails more than once, the 3rd party device may be already included in another network. So first exclude and then include the device.',
            name: "InclusionDescription",
          },
          {
            text:
              'Please use this procedure only when the primary controller is missing or otherwise inoperable.\nTo reset the thermostat Set DIL switch 1 on the back of the unit to \'ON\' position, scroll through the function menu by rotating the dial, select "P" and press the dial twice on the target device to execute reset. \nNote: After successful operation device displayed "PP".\nIt will put the device in factory default, that include setting all the configuration, Association to factory default and removing the device from Z-Wave network.',
            name: "ResetDescription",
          },
          { text: "MAX10U-734", id: "0005", name: "Identifier", type: "0001" },
          {
            text:
              "SRT321 will wake-up regularly and announce the wakeup state by sending Wakeup Notification to the configured node ID if Wakeup Interval and valid node ID is set. \nTo forcefully wake up the device to send Wakeup notification do the following steps: Set DIL switch 1 on the back of the unit to 'ON' position, and than back to the 'OFF' position.\nNote: It is possible to set the node ID to 255 to send wakeup notifications as broadcast. In this mode device takes more time to go to sleep and drains battery faster, but can notify all it's direct neighbors about a wakeup.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1563/SRT321 User MAnual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "The thermostat includes TPI software that optimises boiler firing to minimise overshooting of temperature in a heated environment. It has been proved that TPI controllers provide considerable energy savings over standard heating controllers. By using interoperable radio solutions the user can remotely change the set point, read the temperature or receive battery reports. It makes this device an ideal partner for use with a home gateway for web enabled apps allowing you to remotely control your heating while on the move. You no longer have to worry about returning to a cold house as long as you have a phone or tablet PC handy. \nBy combining ease of use, ease of installation and intelligent control this thermostat is suitable for use in most heating systems.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1563/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "64",
        SupportedModes: [
          {
            Mode: [
              { index: "0", label: "Off" },
              { index: "1", label: "Heat" },
            ],
          },
        ],
      },
      { id: "67", Compatibility: [{ Base: [0] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            label: "Temperature sensor",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Enables Temperature Sensor",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Temperature Scale",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Celsius", value: "0" },
              { label: "Fahrenheit", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Delta Temperature",
            type: "byte",
            value: "10",
            Help: "\n        Delta Temperature in 0.1 degree steps.\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "6",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Thermostat Mode Set",
                max_associations: "4",
              },
              { index: "3", label: "Binary Switch Set", max_associations: "4" },
              {
                index: "4",
                label: "Unsolicited Battery Level Reports",
                max_associations: "4",
              },
              {
                index: "5",
                label: "Thermostat Set Point Reports",
                max_associations: "4",
              },
              {
                index: "6",
                label: "Unsolicited Sensor Multilevel Reports",
                max_associations: "4",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
