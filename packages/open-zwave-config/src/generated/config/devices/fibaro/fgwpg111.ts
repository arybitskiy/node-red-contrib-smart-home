import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:2000:1701",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgwpg111.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2854/",
            id: "2000",
            name: "ZWProductPage",
            type: "1701",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2899/FGWPG-111-EN-T-v.0.2.pdf",
            name: "ProductManual",
          },
          {
            text:
              "To remove the device from the Z-Wave network:\n1.\tPlug the device into a socket nearby the main Z-Wave controller.\n2.\tThe LED frame will glow green signaling being added (removing is not necessary otherwise).\n3.\tSet the main controller into remove mode.\n4.\tQuickly, triple click the button located on the casing.\n5.\tWait for the removing process to end.\n6.\tSuccessful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text:
              "FIBARO Wall Plug is powered with mains voltage so it is always awake.",
            name: "WakeupDescription",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted.\n1.\tMake sure the device is powered.\n2.\tPress and hold the button.\n3.\tWait for the LED frame to glow yellow (3rd menu position).\n4.\tRelease the button.\n5.\tClick the button once to confirm selection.\n6.\tAfter few seconds the device will restart with factory settings, which is signaled with the red frame color.\n\nResetting the device is not the recommended way of removing the device from the Z-Wave network. Use the reset procedure only if the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          { text: "Wall Plug UK", name: "Name" },
          {
            text:
              "FIBARO Wall Plug is a remotely controlled plug-in switch with the ability to measure power and energy consumption. It uses a LED frame to visualize the current load and operating mode with color changing illumination. FIBARO Wall Plug makes it possible to control electrical devices in a convenient and maintenance-free way.  \nMain features of FIBARO Wall Plug:\n- Compatible with any Z-Wave or Z-Wave+ Controller.\n- Supports Z-Wave network Security Modes: S0 with AES-128 encryption and S2 with PRNG-based encryption.\n- Extremely easy installation - simply plug the device into the mains socket.\n- Works as a Z-Wave signal repeater.\n- Active power and energy consumption metering for plugged device.\n- Current value of the load and operating mode are indicated by the multi-color LED frame.",
            name: "Description",
          },
          { text: "FGWPB-111", id: "2000", name: "Identifier", type: "1701" },
          {
            text:
              "To add the device to the Z-Wave network:\n1.\tPlug the device into a socket nearby the main Z-Wave controller.\n2.\tThe LED frame will glow red signaling not being added (reset or remove the device otherwise).\n3.\tSet the main controller in (security/non-security) add mode.\n4.\tQuickly, triple click the button located on the casing.\n5.\tIf you are adding in S2 authenticated mode, type in the device pin code (underlined part of the public key available on the device or in the manual).\n6.\tWait for the adding process to end.\n7.\tSuccessful adding will be confirmed by the Z-Wave controller’s message.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2000",
            name: "FrequencyName",
            type: "1701",
          },
          {
            text: "https://products.z-wavealliance.org/products/2899/",
            id: "1000",
            name: "ZWProductPage",
            type: "1801",
          },
          { text: "FGWPG-111", id: "1000", name: "Identifier", type: "1801" },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "1801",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2854/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2899/xml",
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
      { action: "add", id: "32", Compatibility: "" },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Remember device status after a power failure",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter determines how the Wall Plug will react in the event of power supply failure (e.g. taking out from the electrical outlet).\n                After the power supply is back on, the Wall Plug can be restored to previous state or remain switched off.\n                This parameter is ignored in Always On mode - the device automatically turns ON after plugging it into the socket.\n                Default setting: 1\n            ",
            Item: [
              { label: "Device remains switched off", value: "0" },
              {
                label:
                  "Device restores the state from before the power failure",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Overload safety switch",
            max: "30000",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "This function allows to turning off the controlled device in case of exceeding the defined power.\n                Controlled device can be turned back on via button or sending a control frame.\n                Available settings: 10 - 30000 (1,0W - 3000,0W step 0,1W).\n                Default setting: 0 (function inactive)\n            ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Power reporting",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "15",
            Help:
              "This parameter determines the minimum percentage change inactive power consumption (in relation to the previously reported) that will result in sending new power report.\n                Available settings: 1-100. 0 - power reports inactive.\n                Default Setting: 15 (%)\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Energy reporting threshold",
            max: "500",
            min: "0",
            size: "2",
            type: "short",
            value: "10",
            Help:
              "This parameter determines the minimum change in energy consumption (in relation to the previously reported), that will result in sending a new report.\n                Available settings: 1-500 (0,01kWh - 5kWh). 0 - energy reports inactive.\n                Default Setting: 10 (0,1 kWh)\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Periodic power reporting",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "This parameter defines time period between reports sent when changes in power load have not been record if changes are smaller than defined in parameter 11.\n                By default reports are sent every hour.\n                Available settings: 0 - 32400 (s). 0 - periodic reports inactive.\n                Default setting: 3600\n            ",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Periodic energy reporting",
            max: "32400",
            min: "0",
            size: "2",
            type: "short",
            value: "3600",
            Help:
              "This parameter defines time period between reports sent when changes in power load have not been recorded or if changes are smaller than in paramater 11.\n                By default reports are sent every hour.\n                Available settings: 0 - 32400 (s). 0 - periodic reports inactive.\n                Default setting: 3600\n            ",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Measuring energy consumed by the Wall Plug itself",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter determines whether power metering should include the amount of power consumed by the Wall Plug itself.\n                Results are being added to the value of power consumed by controlled device.\n                Default setting: 0 Inactive\n            ",
            Item: [
              { label: "Inactive", value: "0" },
              { label: "Active", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "UP value association group 3",
            max: "30000",
            min: "100",
            size: "2",
            type: "short",
            value: "500",
            Help:
              "Upper power threshold, used in parameter 23. Up value cannot be lower than a value specified in parameter 22.\n                Available settings: 100 - 30000 (10,0W - 30000,0W).\n                Default setting: 500 (50W)\n            ",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "DOWN value association group 3",
            max: "29900",
            min: "0",
            size: "2",
            type: "short",
            value: "300",
            Help:
              "Lower power threshold, used in parameter 23.\n                DOWN value cannot be higher than a value specified in parameter 21.\n                Available settings: 0 - 29900 (0,0W - 2990,0W step 0,1W).\n                Default setting: 300 (30W)\n            ",
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "Controlling association group 3",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "This parameter defines the way that 3rd association group devices are controlled.\n                Depends on the actual measured power(according to parameters 21 and 22 settings).\n                Default setting: 3\n            ",
            Item: [
              {
                label:
                  "Send frame (with value set in parameter 26) only if power exceeded value of parameter 21 turn the associated devices ON, once the power drops below DOWN value (parameter 21)",
                value: "1",
              },
              {
                label:
                  "Send frame (with value set in parameter 27) only if power dropped below value of paramater 22",
                value: "2",
              },
              { label: "Send frame in both cases", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Switch ON value - association group 2",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "The value of BASIC SET command frame sent to the devices associated in 2nd group On/Off (Button) when turning the device ON using the button.\n                Available settings: 0-99 or 255.\n                Default setting: 255\n            ",
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "Switch OFF value - association group 2",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "The value of BASIC SET command frame sent to the devices associated in 2nd group On/Off (Button) when turning the device OFF using the button.\n                Available settings: 0-99 or 255.\n                Default setting: 0\n            ",
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "THRESHOLD UP value - association group 3",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "The value of BASIC SET command frame sent to the devices associated in 3rd group On/Off (Power) if power exceeded value of parameter 21.\n                Available settings: 0-99 or 255.\n                Default setting: 255\n            ",
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "THRESHOLD DOWN value - association group 3",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "The value of BASIC SET command frame sent to the devices associated in 3rd group On/Off (Power) if power dropped below value of parameter 22.\n                Available settings: 0-99 or 255.\n                Default setting: 0\n            ",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Active Alarms",
            max: "63",
            min: "1",
            size: "1",
            type: "list",
            value: "63",
            Help:
              "Define Z-Wave network alarms to which the Wall Plug will respond.",
            Item: [
              { label: "General alarm", value: "1" },
              { label: "Smoke alarm", value: "2" },
              { label: "CO alarm", value: "4" },
              { label: "CO2 alarm", value: "8" },
              { label: "High temperature alarm", value: "16" },
              { label: "Flood alarm", value: "32" },
              { label: "All alarms", value: "63" },
            ],
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "Response to alarm frames",
            max: "50",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "This parameter defines how the Wall Plug will respond to alarms (device's status change).\n                In case of values 1 or 2 the Wall Plug is operating normally and LED frame signals an alarm through time defined in parameter 32 or until the alarm is cancelled.\n                In case of values 5 to 50 the Wall Plug does not report status change, power changes, ignores BASIC SET command frames.\n                After time defined in parameter 32 or after the alarm cancellation, connected device is set to the previous state.\n                0 - no reaction 1-turn connected device on 2-turn connected device off 5-50(0,5-50,0s step 0,1s)-cyclically change device state with set period.\n                Default setting:0-no reaction\n            ",
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "Alarm state duration",
            max: "32400",
            min: "1",
            size: "2",
            type: "short",
            value: "600",
            Help:
              "This parameter specifies the duration of alarm state.\n                If a device sending an alarm frame through the Z-Wave network sets alarm duration as well, this settings are ignored.\n                Available settings 1-32400(s)\n                Default setting: 600\n            ",
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Power load for violet colour",
            max: "30000",
            min: "1000",
            size: "2",
            type: "short",
            value: "30000",
            Help:
              "This parameter determines maximum active power value, which when exceeded, causes the LED frame to flash violet. Function is active only when parameter 41 is set to 1 or 2.\n                Available settings: 1000 - 30000 (100,0W - 3000,0W, step 0,1W).\n                Default setting: 30000 (3000W)\n            ",
          },
          {
            genre: "config",
            index: "41",
            instance: "1",
            label: "LED frame colour when controlled device is on",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "When set to 1 or 2, LED frame colour will change depending on active power and parameter 40.\n                Other colours are set permanently and do not depend on power consumption\n            ",
            Item: [
              { label: "Illumination turned off completely", value: "0" },
              {
                label: "Colour changes smoothly depending on active power",
                value: "1",
              },
              {
                label: "Colour changes in steps depending on active power",
                value: "2",
              },
              { label: "White illumination", value: "3" },
              { label: "Red illumination", value: "4" },
              { label: "Green illumination", value: "5" },
              { label: "Blue illumination", value: "6" },
              { label: "Yellow illumination", value: "7" },
              { label: "Cyan illumination", value: "8" },
              { label: "Magenta illumination", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "LED frame colour when controlled device is off",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines the illumination colour after turning off.",
            Item: [
              { label: "illumination turned off completely", value: "0" },
              {
                label:
                  "LED frame is illuminated with a colour corresponding to the last measured power, before the controlled device was turned off",
                value: "1",
              },
              { label: "White illumination", value: "3" },
              { label: "Red illumination", value: "4" },
              { label: "Green illumination", value: "5" },
              { label: "Blue illumination", value: "6" },
              { label: "Yellow illumination", value: "7" },
              { label: "Cyan illumination", value: "8" },
              { label: "Magenta illumination", value: "9" },
            ],
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "LED frame colour at the Z-Wave network alarm detection",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "This parameter defines the illumination colour in case of Z-Wave alarm.",
            Item: [
              { label: "Illumination turned off completely", value: "0" },
              {
                label:
                  "No change in colour. LED frame colour is determined by settings of parameters 41 or 42",
                value: "1",
              },
              { label: "LED frame flashes red / blue / white", value: "2" },
              { label: "White illumination", value: "3" },
              { label: "Red illumination", value: "4" },
              { label: "Green illumination", value: "5" },
              { label: "Blue illumination", value: "6" },
              { label: "Yellow illumination", value: "7" },
              { label: "Cyan illumination", value: "8" },
              { label: "Magenta illumination", value: "9" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "BasicSet forward relay status on local Button event",
                max_associations: "5",
              },
              {
                index: "3",
                label: "BasicSet base on Plug power",
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
