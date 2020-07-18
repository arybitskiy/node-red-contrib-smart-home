import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 10,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0109:0201:2002",
            name: "OzwInfoPage",
          },
          { text: "images/vision/zp3102.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/84/",
            id: "0201",
            name: "ZWProductPage",
            type: "2002",
          },
          {
            text:
              "The ZP3102 is a Z-Wave enabled motion detector and temperature sensor.  The motion detector has 120 degrees of horizontal visibility and 60 degrees of vertical visibility.  The temperature sensor that is built in to the ZP3102 is capable of reporting in both Celsius and Fahrenheit scales, and may be queried for the temperature and it will report it automatically when it detects changes.  The sensor is battery operated and includes the ability to report the battery level and will transmit an alert signal if the battery assumes a critically low level.  The ZP3102 is future-proofed by also supporting the ability to have its firmware updated over the Z-Wave network.",
            name: "Description",
          },
          {
            text:
              "http://www.visionsecurity.com.tw/ha_products_page2_154_161.html",
            name: "ProductPage",
          },
          {
            text:
              "http://www.visionsecurity.com.tw/ha_products_page2_154_161.html",
            name: "ProductSupport",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0201",
            name: "FrequencyName",
            type: "2002",
          },
          { text: "Motion Detector (with Temperature Sensor)", name: "Name" },
          { text: "ZP 3102", id: "0201", name: "Identifier", type: "2002" },
          {
            text: "https://products.z-wavealliance.org/products/728/",
            id: "0202",
            name: "ZWProductPage",
            type: "2002",
          },
          { text: "2", id: "0202", name: "Identifier", type: "2002" },
          {
            text: "CEPT (Europe) / Brazil",
            id: "0202",
            name: "FrequencyName",
            type: "2002",
          },
          {
            text: "https://products.z-wavealliance.org/products/804/",
            id: "0203",
            name: "ZWProductPage",
            type: "2002",
          },
          { text: "ZP3102IN", id: "0203", name: "Identifier", type: "2002" },
          { text: "India", id: "0203", name: "FrequencyName", type: "2002" },
          {
            text: "https://products.z-wavealliance.org/products/847/",
            id: "0204",
            name: "ZWProductPage",
            type: "2002",
          },
          { text: "Japan", id: "0204", name: "FrequencyName", type: "2002" },
          { text: "ZP3102JP", id: "0204", name: "Identifier", type: "2002" },
          {
            text: "https://products.z-wavealliance.org/products/1702/",
            id: "0205",
            name: "ZWProductPage",
            type: "2002",
          },
          { text: "ZP3102US-5", id: "0205", name: "Identifier", type: "2002" },
          {
            text:
              "Remove the rear cover to wake up the device, or set the wake up interval time from 10 minutes to 1 week.  The battery will be drained quickly if you fail to replace the cover after using that method to wake up the device.",
            name: "WakeupDescription",
          },
          {
            text:
              "Removing the rear cover to wake up the device.  Press Program Switch 10 times within 10 seconds, ZP3102 will go back to factory default. (This is to be used only in the case of the primary controller being inoperable or otherwise unavailable.)",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0205",
            name: "FrequencyName",
            type: "2002",
          },
          {
            text:
              "Put the Z-Wave Interface Controller into 'inclusion' mode, and follow its instructions to add the ZP3102 to your Z-Wave network. For a successful inclusion, it is suggested to have the sensor and your Z-Wave controller about one meter apart.  Press the Program Switch of the ZP3102 (refer to the manual for the location of the program switch) ready the ZP3102 for inclusion into the Z-Wave network.  If inclusion does not take place or is unsuccessful within 20 seconds, the ZP3102 will go to sleep; if this happens, simply repeat pressing the program switch to try again.",
            name: "InclusionDescription",
          },
          {
            text:
              "Put the Z-Wave Interface Controller into “exclusion” mode, and following its instruction to delete the ZP3102 to your Z-Wave network.  Press the Program Switch of ZP3102 once to be excluded. The LED on the ZP3102 should start to flash.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1702/ZP 3102-5 PIR_R3_500 Series_20150724.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/72/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/84/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/703/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/728/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/804/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/847/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1070/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1702/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 10,
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
            label: "Re-Trigger Waiting Time",
            max: "255",
            min: "1",
            type: "byte",
            units: "minutes",
            value: "3",
            Help:
              "Time until an associated device will turn off if no new movement is detected",
          },
          {
            genre: "config",
            index: "2",
            label: "Celcius/Fahrenheit",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Report temperature in Celcius or Fahrenheit",
            Item: [
              { label: "Celcius", value: "0" },
              { label: "Fahrenheit", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Sensitivity",
            max: "7",
            min: "1",
            type: "byte",
            units: "",
            value: "4",
            Help:
              "Sensitivity 1-7 (1 = most sensitive, 7 = most insensitive. 4 is default)",
          },
          {
            genre: "config",
            index: "4",
            label: "Temperature adjustment",
            max: "255",
            min: "0",
            type: "byte",
            units: "Degrees Celsius",
            value: "0",
            Help: "-10 to -1, 0 to 10 (Signed decimal: 246 to 255, 0 to 10)",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "Basic on/off group for detecting movements",
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
