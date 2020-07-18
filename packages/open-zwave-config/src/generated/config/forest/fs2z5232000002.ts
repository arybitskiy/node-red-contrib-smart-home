import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0207:0100:0027",
            name: "OzwInfoPage",
          },
          { text: "images/forest/fs2z5232000002.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3185/",
            id: "0100",
            name: "ZWProductPage",
            type: "0027",
          },
          {
            text:
              "Press configuration button 3 times. LED3 is ON.\nPress and hold once more for 4 seconds.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Press configuration button 25x times. LED 1 is ON. Press and hold once more for 4 seconds to confirm.\nPlease use this procedure only when your network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3185/Installing_the_FOREST_SHUTTLE_S-M-L _Z-wave_V1_6EN.pdf",
            name: "ProductManual",
          },
          {
            text: "FS2Z5232000007",
            id: "0100",
            name: "Identifier",
            type: "0027",
          },
          {
            text:
              "CEPT (Europe) / U.S. / Canada / Mexico / India / Australia / New Zealand",
            id: "0100",
            name: "FrequencyName",
            type: "0027",
          },
          {
            text:
              "Forest Shuttle L Z-wave, Shuttle S Z-wave (US) and Forest motorized curtain track systems (FMS) make an unbeatable combination when it comes to noiseless operated motorized curtains. The smooth and silent running curtain track system can, in addition to remote operation, also be operated by hand. Thanks to Forest’s special Touch Impulse Technology, a gentle pull on the curtain is enough to activate the motor. The Forest Shuttle L Z-wave, Shuttle S Z-Wave (US) makes sure that your curtains will always hang beautifully smooth and supple. Opened as well as closed!\n• Touch Impulse Technology, gently pulling the curtain will activate the motor.\n• Integrated Emergency Control ensures manual operation of the curtain in case of power failure.\n• Modular motor, different modules can be attached for various control options: Radio Frequency, Switch, Infrared, Domotics, Building/Hotel Automation, Serial Communication, Z-Wave, etc.\n• Forest Shuttle L  Z-Wave and Shuttle S Z-wave (US) will have an internal Z-Wave receiver and BUS connection.\n• Silent motor, speeds: 14 and 17 cm/sec., with slow start and slow stop.\n• Full automatic setting of the limits.\n• Stack-back position programmable to every desired setting.\n• Forest Shuttle L  Z-Wave and Shuttle S Z-wave (US) have an integrated power supply.\n• Motor pulley connects motor and FMS track. Also available in upside down version to conceal the motor into the ceiling.\n• Available track lenghts: 5.80 meters and 7.00 meters. FMS track and components available in white, grey and black.",
            name: "Description",
          },
          { text: "Forest Shuttle LZ ANZ", name: "Name" },
          {
            text:
              "Press configuration button 3 times. LED3 is ON.\nPress and hold once more for 4 seconds.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1294/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2548/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3184/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3185/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
