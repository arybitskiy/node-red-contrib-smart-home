import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0022:0009",
            name: "OzwInfoPage",
          },
          { text: "images/philio/psr04.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2573/",
            id: "0022",
            name: "ZWProductPage",
            type: "0009",
          },
          {
            text:
              "1. Have Z-Wave™ Controller entered inclusion mode.\n2. Rotate to area A and then press button three times within 1.5 seconds to enter the inclusion mode.\n3. After add successful, the device will wake to receive the setting command from Z-Wave™ Controller about 20 seconds.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Have Z-Wave™  Controller entered exclusion mode.\n2. Rotate to area A and then press button three times within 1.5 seconds to  enter the exclusion mode. Node ID has been removed.",
            name: "ExclusionDescription",
          },
          {
            text:
              "After the device adding to the network, it will wake-up once per day in default. When it wake-up it will broadcast the “Wake Up Notification” message  to  the  network,  and  wake-up  20  seconds  for  receive  the setting commands. The wake-up interval minimum setting is 30 minutes, and maximum setting is 120 hours. And the interval step is 30 minutes. If the user wants to wake-up the device immediately, please rotate to area A and then press the button once. The device will wake-up 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              "This device is a multiple functions button switch. It is able to\nswitch the appliances on/off or adjust the percentage of dimmer.\nIt can also work as a timer. The well designed wall bracket and\nmagnetic back let the switch can be fixed on the wall. This product\ncan be included and operated in any Z-Wave™  network  with other Z-Wave™  certified devices from other manufacturers and/or other applications.",
            name: "Description",
          },
          { text: "PSR04", id: "0022", name: "Identifier", type: "0009" },
          { text: "Smart Color Button", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2573/PSR04_manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Notice: Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Rotate to area A and then press button four times within 1.5 seconds and do not release the button in the 4 th  pressed, and the red LED will light ON.\n2. After the red LED goes out, release the button within 2 seconds.\n3. IDs are removed and all settings will reset to factory default.",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe) / Brazil",
            id: "0022",
            name: "FrequencyName",
            type: "0009",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1300/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1448/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2573/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            label: "Basic Set Off Level",
            max: "99",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n          Control the value represented by the left-side in area D.\n\t\t  E.g. Setting this configuration\n\t\t  to 15 means range of Command Basic Set value start from 15\n\t  ",
          },
          {
            genre: "config",
            index: "2",
            label: "Basic Set On Level",
            max: "99",
            min: "0",
            type: "byte",
            value: "99",
            Help:
              "\n          Control the value represented by the right-side in area D.\n\t\t  E.g. Setting this configuration\n\t\t  to 15 means range of Command Basic Set value start from 15\n\t  ",
          },
          {
            genre: "config",
            index: "10",
            label: "Auto report battery time",
            max: "127",
            min: "0",
            type: "byte",
            value: "12",
            Help:
              "\n          The interval time for auto reporting\n          the Battery level. 0 means turn off auto report battery.\n          The default value is 12.\n       ",
          },
          {
            genre: "config",
            index: "25",
            label: "Customer function",
            max: "3",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n          Bit 0: Dimmer setting method.\n          0 : Auto send Command Basic Set after rotating.\n          1 : Send Command Basic Set by touching key after rotating\n          Bit 1: Disable buzzer in timer mode.\n          0: Enable.\n          1: Disable.\n       ",
          },
          {
            genre: "config",
            index: "26",
            label: "Scene Holding report",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n          Send Central Scene Holding when the button is held.\n       ",
            Item: [
              { label: "Enabled", value: "0" },
              { label: "Disabled", value: "1" },
            ],
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Reports", max_associations: "8" },
              {
                auto: "true",
                index: "2",
                label: "Light Control",
                max_associations: "8",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
