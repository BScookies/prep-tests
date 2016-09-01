// This file is how TestRunner.html tests your code. You shouldn't
// need to modify anything here, but you could check out failing
// tests to see what exactly is expected of your code.

var expect = chai.expect;


// Runs a number of tests to check a function for native methods
var dontCheatOn = function(func) {
  var globals = [
    'Math',
    'Array',
    'String',
    'Object',
    'Date',
    'Number'
  ];

  var methods = [
    '.pop',
    '.push',
    '.shift',
    '.unshift',
    '.join',
    '.reverse',
    '.concat',
    '.slice',
    '.split',
    '.trim',
    '.replace',
    '.splice',
    '.substring',
    '.substr',
    '.indexOf',
    '.lastIndexOf',
    '.sort',
    '.keys',
    '.values'
  ];

  var pres = [' ','\n','\t','{','[','('];

  var posts = ['.', '('];

  globals.forEach(function(global) {
    pres.forEach(function(pre) {
      posts.forEach(function(post){
        expect(func + '').to.not.contain(pre + global + post, 'Please do these exercises without using native functions.');
      });
    });
  });

  methods.forEach(function(method) {
    expect(func + '').to.not.contain(method, 'Please do these exercises without using native functions.');
  });
};



// Please write tests for all W1D3 exercises below (https://github.com/mmeigooni/rp-w1d3)

// for use in Inc & Dec tests
function inc(x) {
  return x + 1;
}
function dec(x) {
  return x - 1;
}

describe('Warmups', function() {

  describe('Exercise 1', function() {
    it('should tell if it\'s hot or not', function() {
      expect(isHot(95)).to.equal('It\'s hot!');
      expect(isHot(85)).to.equal('It\'s not hot!');
    });

    it('should check what a specific age is allowed to do', function() {
      expect(oldEnoughTo(16)).to.equal('Drive a car');
      expect(oldEnoughTo(17)).to.equal('Vote');
      expect(oldEnoughTo(21)).to.equal('Drink');
      expect(oldEnoughTo(25)).to.equal('Do all the things!');
    });
  });

  describe('Exercise 2', function() {
    it('should say hello in three languages', function() {
      dontCheatOn(sayHello);

      var languages = ['Abaza', 'Abkhaz', 'Adangme', 'Adangbe', 'Adyghe', 'Afar', 'Afrikaans', 'Ainu', 'Ajië', 'Akan', 'Albanian', 'Aleut', 'Amdang', 'Amharic', 'Angika', 'Apache', 'Arabic', 'Aragonese', 'Aramaic', 'Arapaho', 'Armenian', 'Arrernte', 'Assamese', 'Asturian', 'Avar', 'Avestan', 'Aymara', 'Äynu', 'Azerbaijani', 'Bai', 'Balinese', 'Balti', 'Bambara', 'Bashkir', 'Basque', 'Bassa', 'Batak', 'Belarusian', 'Bemba', 'Bengali', 'Berber', 'Berta', 'Bhojpuri', 'Blackfoot', 'Bodo', 'Bosnian', 'Breton', 'Buginese', 'Buhid', 'Bulgarian', 'Burmese', 'Cahuilla', 'Carrier', 'Catalan', 'Cayuga', 'Cebuano', 'Chamorro', 'Chechen', 'Cherokee', 'Chewa', 'Cheyenne', 'Chhattisgarhi', 'Chickasaw', 'Chinese', 'Chipewyan', 'Choctaw', 'Chuvash', 'Cimbrian', 'Comanche', 'Coptic', 'Cornish', 'Corsican', 'Cree', 'Croatian', 'Czech', 'Dakota', 'Dalecarlian', 'Danish', 'Dargwa', 'Dari', 'Dhivehi', 'Drehu', 'Dungan', 'Dutch', 'Dzongkha', 'English', 'Erzya', 'Esperanto', 'Estonian', 'Evenki', 'Ewe', 'Eyak', 'Faroese', 'Fijian', 'Fiji Hindi', 'Filipino', 'Finnish', 'Fon', 'French', 'Frisian', 'Friulian', 'Fula', 'Fur', 'Ga', 'Galician', 'Gan', 'Ge\'ez', 'Georgian', 'German', 'Gikuyu', 'Gilbertese', 'Godoberi', 'Greek', 'Greenlandic', 'Guaraní', 'Gujarati', 'Gumuz', 'Gurung', 'Gwich\'in', 'Haida', 'Haitian Creole', 'Hakka', 'Harari', 'Hausa', 'Hawaiian', 'Hebrew', 'Herero', 'Himba', 'Hindi', 'Hindustani', 'Hiri Motu', 'Hmong', 'Hopi', 'Hungarian', 'Icelandic', 'Ido', 'Igbo', 'Ik', 'Ilocano', 'Indonesian', 'Ingush', 'Interlingua', 'Inupiat', 'Irish', 'Italian', 'Japanese', 'Javanese', 'Judaeo-Spanish', 'Jutish', 'Kabardian', 'Kabyle', 'Kaingang', 'Kannada', 'Kanuri', 'Karakalpak', 'Karamojong', 'Karelian', 'Kashmiri', 'Kashubian', 'Kazakh', 'Kendeje', 'Khakas', 'Khmer', 'Khoekhoe', 'Khowar', 'Kiribati', 'Konkani', 'Korean', 'Kuliak', 'Kumyk', 'Kurdish', 'Kutchi', 'Ladakhi', 'Ladin', 'Lakota', 'Lao', 'Latvian', 'Laz', 'Leonese', 'Lepcha', 'Limbu', 'Limburgish', 'Lingala', 'Lisu', 'Lithuanian', 'Livonian', 'Low German', 'Luba-Kasai', 'Luganda', 'Luiseño', 'Luo', 'Luri', 'Luxembourgish', 'Maasai', 'Macedonian', 'Magahi', 'Magar', 'Maithili', 'Makassarese', 'Malay', 'Malayalam', 'Maltese', 'Manchu', 'Mandarin', 'Manx', 'Marathi', 'Marshallese', 'Masalit', 'Meitei', 'Miami-Illinois', 'Min', 'Mon', 'Mongolian', 'Muscogee Creek', 'Musgu', 'Māori', 'Nahuatl', 'Navajo', 'Ndyuka', 'Nepali', 'Northern Thai', 'Norwegian', 'Nuosu', 'Nyangia', 'Occidental', 'Occitan', 'Ojibwe', 'Odia', 'Pahari', 'Palula', 'Persian', 'Piman', 'Pipil', 'Pitjantjatjara', 'Plautdietsch', 'Polish', 'Portuguese', 'Raga', 'Rajasthani', 'Romani', 'Romanian', 'Romansh', 'Russian', 'Rusyn', 'Sami', 'Samoan', 'Sanskrit', 'Sardinian', 'Saurashtra', 'Scots', 'Serbian', 'Shan', 'Shona', 'Sicilian', 'Sindhi', 'Sinhala', 'Slovak', 'Slovene', 'Somali', 'Sotho', 'Spanish', 'Stellingwarfs', 'Sundanese', 'Swahili', 'Swedish', 'Swiss German', 'Sylheti', 'Tagalog', 'Tahitian', 'Turkish', 'Tai Dam', 'Tai Khün', 'Tai Lü', 'Tai Nüa', 'Tamang', 'Tamil', 'Tatar', 'Telugu', 'Tepes', 'Teribe', 'Tetum', 'Thai', 'Tibetan', 'Tigrinya', 'Tongan', 'Tsez', 'Tswana', 'Tuareg', 'Turkish', 'Uduk', 'Ukrainian', 'Urdu', 'Uyghur', 'Uzbek', 'Venda', 'Venetian', 'Vietnamese', 'Volapük', 'Võro', 'Walloon', 'Warlpiri', 'Welsh', 'West Frisian', 'Wolof', 'Wu', 'Xaracuu', 'Xhosa', 'Xiang', 'Xibe', 'Yapese', 'Yiddish', 'Yoruba', 'Yue', 'Zhuang', 'Zulu']

      var helloCount = 0;

      languages.forEach(function(language) {
        if(typeof sayHello(language) === 'string') {
          helloCount++;
        }
      });

      expect(helloCount).to.be.at.least(3);
    })
  })
})

describe('Introduction to Repetition', function() {
  describe('Basic Requirements', function() {
    describe('Sum', function() {
      it('should sum to n', function() {
        dontCheatOn(sum);

        // added additional argument to pass once sum is modified in more practice
        expect(sum(3, 1)).to.equal(6);
        expect(sum(4, 1)).to.equal(10);
        expect(sum(5, 1)).to.equal(15);
      });
    });

    describe('Factorial', function() {
      it('should find the factorial of n', function() {
        dontCheatOn(factorial);
        expect(factorial(3)).to.equal(6);
        expect(factorial(4)).to.equal(24);
        expect(factorial(5)).to.equal(120);
      });
    });

    describe('String Repeat', function() {
      it('should repeat a string', function() {
        dontCheatOn(repeatString);
        expect(repeatString('dog', 0)).to.equal('');
        expect(repeatString('cat', 1)).to.equal('cat');
        expect(repeatString('mouse', 5)).to.equal('mousemousemousemousemouse');
      });
    });

    describe('Fibonacci', function() {
      it('should compute the nth Fibonacci Number', function() {
        dontCheatOn(fib);
        expect(fib(0)).to.equal(1);
        expect(fib(1)).to.equal(1);
        expect(fib(5)).to.equal(8);
        expect(fib(14)).to.equal(610);
      });
    });
  });

  describe('More Practice', function() {
    describe('Sum', function() {
      it('should sum from start to end', function() {
        expect(sum(2, 7)).to.equal(27);
        expect(sum(3, 5)).to.equal(12);
      });

      it('should swap start and end when start is larger', function() {
        expect(sum(5, 3)).to.equal(12);
        expect(sum(7, 2)).to.equal(27);
      });
    });

    describe('Product', function() {
      it('should find product from start to end', function() {
        dontCheatOn(product);
        expect(product(2, 4)).to.equal(24);
        expect(product(3, 6)).to.equal(360);
      });

      it('should swap start and end when start is larger', function() {
        expect(product(4, 2)).to.equal(24);
        expect(product(6, 3)).to.equal(360);
      });

      it('should refactor factorial in terms of product', function() {
        expect(factorial.toString()).to.contain('product');
      });
    });

    describe('Inc & Dec', function() {
      var addStr = add.toString();

      it('should find the correct sum', function() {
        dontCheatOn(add);
        expect(add(3, 9)).to.equal(12);
        expect(add(15, 3)).to.equal(18);
        expect(add(102, 4)).to.equal(106);
      });

      it('should not use + or -', function() {
        expect(addStr).to.not.contain('+');
        expect(addStr).to.not.contain('-');
      });
    });
  });

  describe('Advanced', function() {
    describe('String Length', function() {
      // to check for proper usage
      var strLengthString = stringLength.toString();

      it('should find the correct length', function() {
        expect(stringLength('Hello!')).to.equal(6);
        expect(stringLength('How are you today')).to.equal(17);
      });

      it('should not use length', function() {
        expect(strLengthString).to.not.contain('length');
      });

      it('should use slice', function() {
        expect(strLengthString).to.contain('slice');
      });
    });

    describe('Modulo', function() {
      it('should find the remainder', function() {
        dontCheatOn(modulo)
        expect(modulo(5, 2)).to.equal(1);
        expect(modulo(8, 10)).to.equal(8);
        expect(modulo(7, 5)).to.equal(2);
        expect(modulo(486, 7)).to.equal(3);
      });

      it('should not use %', function() {
        expect(modulo.toString()).to.not.contain('%');
      });
    });

    describe('Count Characters', function() {
      it('should count the number of times a character appears', function() {
        expect(countChars('mississippi', 's')).to.equal(4);
        expect(countChars('bbb', 'b')).to.equal(3);
        expect(countChars('keep counting, don\'t stop', ' ')).to.equal(3);
      });
    });

    describe('Index Of', function() {
      it('should find the index of a given character', function() {
        expect(indexOf.toString()).to.not.contain('.indexOf');
        expect(indexOf('find the hidd6en number', '6')).to.equal(13);
        expect(indexOf('aaaaaa', 'a')).to.equal(0);
        expect(indexOf('count dracula', 'd')).to.equal(6);
      });
    });
  });
});