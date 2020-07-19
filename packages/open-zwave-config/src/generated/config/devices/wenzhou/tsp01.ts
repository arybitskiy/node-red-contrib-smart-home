import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0118:0002:0002",
            name: "OzwInfoPage",
          },
          { text: "images/wenzhou/tsp01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/839/",
            id: "0002",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "TSM02U", id: "0002", name: "Identifier", type: "0002" },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0002",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "PIR, door/window, temperature and illumination, 4 sensors function in one.\n\n - (1)Door/window (2)PIR (3)illumination and (4)temperature functions in one sensor\n - Adopt newest Z-wave 400 series chip, support multichannel operation and higher data rate (9.6/40/100kbps)\n - Higher output power (+2.5dBm output power as compared to -2.5dBm 300 series Z-wave module) to enhance the communication range\n - 1500mA CR123A lithium battery to guarantee 2 year battery life\n - Built in light sensor while applied to light control\n - Adopt Z-Wave protocol to secure the success of wireless two way communication\n - With Tamper proof protection\n - Easy install\n - Low battery indication\n - Auto report the open/close status and battery status\n - FCC part15.249 / EN300 220-1/ certification\n - NCC",
            name: "Description",
          },
          { text: "TSM02U Multi-Sensor", name: "Name" },
          {
            text: "http://www.tkbhome.com/?cn-p-d-257.html",
            name: "ProductPage",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/838/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/839/xml",
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
            index: "2",
            instance: "1",
            label: "Basic Set Level",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "\n\t\t\t\tSetting the BASIC command value to turn on the light. The 0xFF (255) means turn on the light. \n\t\t\t\tFor dimmer equipment 1 to 100 means the light strength.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "PIR Sensitivity",
            max: "99",
            min: "0",
            type: "byte",
            value: "70",
            Help:
              "PIR sensitivity settings. \n\t\t\t\t0 means disable the PIR motion.\n\t\t\t\t1 means the lowest sensitivity.\n\t\t\t\t99 means the highest sensitivity.\n\t\t\t\tHigh sensitivity means can detect long distance, but if there is more noise signal in the environment, it will re-trigger too frequently.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Light threshold",
            max: "100",
            min: "0",
            type: "byte",
            value: "99",
            Help:
              "Setting the illumination threshold to turn on the light. When the event triggered and the environment illumination lower than \n\t\t\t\tthe threshold, the device will turn on the light.\n\t\t\t\t0 means turn off illumination detected function and never turn on the light.\n\t\t\t\t1 means darkest.\n\t\t\t\t99 means brightest.\n\t\t\t\t100 means turn off illumination detected function. And always turn on the light.\n\t\t\t\t* Notice * in none test mode, only the value in 1 to 99 will enable the illumination detected function and update the illumination value.",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Operation Mode",
            max: "127",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "Bit 0: 1 means security mode; 0 means home automation mode.\n\t\t\t\tBit 1: 1 means enable test mode; 0 means disable test mode.\n\t\t\t\t* Notice * Bit 0 and bit 1 will effect when the DIP Switch setting to program mode. If bit1 is enabled, the bit0 is useless.\n\t\t\t\tBit 2: Reserved, always 1.\n\t\t\t\tBit 3: Setting the temperature scale; 0: Fahrenheit, 1:Celsius\n\t\t\t\tBit 4: Disable illumination report after event triggered.\n\t\t\t\tBit 5: Disable temperature report after event triggered.",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Multi-Sensor Function Switch",
            max: "127",
            min: "0",
            type: "byte",
            value: "4",
            Help:
              "Multi-Sensor Function switch. Using bit to control.\n\t\t\t\tBit 0: Reserved, always 1.\n\t\t\t\tBit 1: Disable PIR integrate Illumination.\n\t\t\t\tBit 2: Reserved, always 1.\n\t\t\t\tBit 3: Reserved.\n\t\t\t\tBit 4: Reserved.\n\t\t\t\tBit 5: Reserved.\n\t\t\t\tBit 6: Enable temperature monitoring. When this bit enabled, the temperature changed 3 degree Fahrenheit, it will report. \n\t\t\t\tAnd also the temperature over 140 degree Fahrenheit, it will report every 64 seconds.",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "PIR re-detect interval time",
            max: "27",
            min: "3",
            type: "byte",
            units: "8 sec",
            value: "3",
            Help:
              "In the security mode, after the PIR report motion detected, setting the re-detect time. 8 seconds per tick, and minimum time is 24 seconds, default tick is 3 (24 seconds). Setting the suitable value to prevent received the trigger signal too frequency. Also can save the battery energy. * Notice * If this value bigger than the configuration setting NO. 9. There is a period after the light turned off and the PIR not detecting.",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Turn Off Light Time",
            max: "127",
            min: "4",
            type: "byte",
            units: "8 sec",
            value: "4",
            Help:
              "After turn on the light, setting the delay time to turn off the light when the PIR motion is not detected. 8 seconds per tick, and minimum time is 32 seconds, default tick is 4 (32 seconds).",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Auto Report Battery Time",
            max: "127",
            min: "1",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "The interval time for auto report the battery level. 30 minutes per tick and minimum time is 30 minutes, default tick is 12 (6 hours)",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Auto Report Illumination Time",
            max: "127",
            min: "1",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "\n\t\t\t\t The interval time for auto report the illumination.\n\t\t\t\t 30 minutes per tick and minimum time is 30 minutes, default tick is 12 (6 hours)\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Auto Report Temperature time",
            max: "127",
            min: "1",
            type: "byte",
            units: "30 min",
            value: "12",
            Help:
              "The interval time for auto report the temperature. 30 minutes per tick and minimum time is 30 minutes, default tick is 12 (6 hours)",
          },
        ],
      },
      {
        id: "48",
        Instance: [{ index: "1" }],
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Motion Sensor",
            max: "0",
            min: "0",
            read_only: "true",
            type: "bool",
            value: "false",
            write_only: "false",
          },
          {
            genre: "user",
            index: "1",
            instance: "1",
            label: "Tamper Sensor",
            max: "0",
            min: "0",
            read_only: "true",
            type: "bool",
            value: "false",
            write_only: "false",
          },
        ],
        SensorMap: [
          { index: "0", type: "12" },
          { index: "1", type: "8" },
        ],
        Compatibility: [{ CreateVars: [false] }],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Report message", max_associations: "7" },
              {
                auto: "true",
                index: "2",
                label: "Light control",
                max_associations: "7",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
