(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/user-service/src/app/app.controller.ts":
/*!*****************************************************!*\
  !*** ./apps/user-service/src/app/app.controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/user-service/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/user-service/src/app/app.module.ts":
/*!*************************************************!*\
  !*** ./apps/user-service/src/app/app.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/user-service/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/user-service/src/app/app.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/user-service/src/app/user/user.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL),
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/user-service/src/app/app.service.ts":
/*!**************************************************!*\
  !*** ./apps/user-service/src/app/app.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to user-service!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/user-service/src/app/user/controllers/user.controller.ts":
/*!***********************************************************************!*\
  !*** ./apps/user-service/src/app/user/controllers/user.controller.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ../services/user.service */ "./apps/user-service/src/app/user/services/user.service.ts");
const user_dao_1 = __webpack_require__(/*! ./user.dao */ "./apps/user-service/src/app/user/controllers/user.dao.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    findAllUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userService.getAllUsers();
        });
    }
    findUser(params, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUser(params.userName);
            user
                ? res.status(200).send(user)
                : res.status(400).send({
                    error: 'Bad request',
                    message: ['No user exists with given username'],
                });
        });
    }
    validateUser(userData, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUser(userData.userName, userData.password);
            user
                ? res.status(200).send(this.userService.generateJWTtoken(userData))
                : res.status(401).send({
                    error: 'Unauthorized',
                    message: ['User or Password invalid'],
                });
        });
    }
    createUser(userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userService.upsertUser(userData);
        });
    }
    updateUser(userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userService.upsertUser(userData);
        });
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findAllUsers", null);
tslib_1.__decorate([
    common_1.Get(':userName'),
    tslib_1.__param(0, common_1.Param()), tslib_1.__param(1, common_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findUser", null);
tslib_1.__decorate([
    common_1.Post(''),
    tslib_1.__param(0, common_1.Body()), tslib_1.__param(1, common_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof user_dao_1.UserRequestData !== "undefined" && user_dao_1.UserRequestData) === "function" ? _b : Object, typeof (_c = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "validateUser", null);
tslib_1.__decorate([
    common_1.Put(''),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof user_dao_1.UserUpdateRequestData !== "undefined" && user_dao_1.UserUpdateRequestData) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
tslib_1.__decorate([
    common_1.Patch(''),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof user_dao_1.UserUpdateRequestData !== "undefined" && user_dao_1.UserUpdateRequestData) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
UserController = tslib_1.__decorate([
    common_1.Controller('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _f : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/user-service/src/app/user/controllers/user.dao.ts":
/*!****************************************************************!*\
  !*** ./apps/user-service/src/app/user/controllers/user.dao.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestData = exports.UserUpdateRequestData = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserUpdateRequestData {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserUpdateRequestData.prototype, "userName", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserUpdateRequestData.prototype, "maidenName", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(8),
    tslib_1.__metadata("design:type", String)
], UserUpdateRequestData.prototype, "password", void 0);
exports.UserUpdateRequestData = UserUpdateRequestData;
class UserRequestData {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserRequestData.prototype, "userName", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], UserRequestData.prototype, "password", void 0);
exports.UserRequestData = UserRequestData;


/***/ }),

/***/ "./apps/user-service/src/app/user/middleware/validate-user/validate-user.middleware.ts":
/*!*********************************************************************************************!*\
  !*** ./apps/user-service/src/app/user/middleware/validate-user/validate-user.middleware.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateUserMiddleware = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ../../services/user.service */ "./apps/user-service/src/app/user/services/user.service.ts");
let ValidateUserMiddleware = class ValidateUserMiddleware {
    constructor(userService) {
        this.userService = userService;
    }
    use(req, res, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userExists = yield this.userService.getUser(req.body.userName);
            if (userExists) {
                res
                    .status(400)
                    .send({ error: 'Bad Request', message: ['User already Exists'] });
            }
            else {
                next();
            }
        });
    }
};
ValidateUserMiddleware = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], ValidateUserMiddleware);
exports.ValidateUserMiddleware = ValidateUserMiddleware;


/***/ }),

/***/ "./apps/user-service/src/app/user/schemas/user.model.ts":
/*!**************************************************************!*\
  !*** ./apps/user-service/src/app/user/schemas/user.model.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let User = class User {
};
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "userName", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "maidenName", void 0);
tslib_1.__decorate([
    mongoose_1.Prop(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
User = tslib_1.__decorate([
    mongoose_1.Schema()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./apps/user-service/src/app/user/services/constant.ts":
/*!*************************************************************!*\
  !*** ./apps/user-service/src/app/user/services/constant.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'secretKey',
};


/***/ }),

/***/ "./apps/user-service/src/app/user/services/user.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/user-service/src/app/user/services/user.service.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const mongoose_2 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const user_model_1 = __webpack_require__(/*! ../schemas/user.model */ "./apps/user-service/src/app/user/schemas/user.model.ts");
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    upsertUser(userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const filter = { userName: userData.userName };
            const update = {
                maidenName: userData.maidenName,
                password: userData.password,
            };
            return yield this.userModel.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true,
            });
        });
    }
    getAllUsers() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find().exec();
        });
    }
    getUser(userName, password = null) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return password
                ? yield this.userModel.findOne({ userName, password }).exec()
                : yield this.userModel.findOne({ userName }).exec();
        });
    }
    generateJWTtoken(userData) {
        return {
            access_token: this.jwtService.sign(userData),
        };
    }
};
UserService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, mongoose_2.InjectModel(user_model_1.User.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./apps/user-service/src/app/user/user.module.ts":
/*!*******************************************************!*\
  !*** ./apps/user-service/src/app/user/user.module.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_controller_1 = __webpack_require__(/*! ./controllers/user.controller */ "./apps/user-service/src/app/user/controllers/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./services/user.service */ "./apps/user-service/src/app/user/services/user.service.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const user_model_1 = __webpack_require__(/*! ./schemas/user.model */ "./apps/user-service/src/app/user/schemas/user.model.ts");
const validate_user_middleware_1 = __webpack_require__(/*! ./middleware/validate-user/validate-user.middleware */ "./apps/user-service/src/app/user/middleware/validate-user/validate-user.middleware.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const constant_1 = __webpack_require__(/*! ./services/constant */ "./apps/user-service/src/app/user/services/constant.ts");
let UserModule = class UserModule {
    configure(consumer) {
        consumer
            .apply(validate_user_middleware_1.ValidateUserMiddleware)
            .forRoutes({ path: 'user', method: common_1.RequestMethod.PUT });
    }
};
UserModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_model_1.User.name, schema: user_model_1.UserSchema }]),
            jwt_1.JwtModule.register({
                secret: constant_1.jwtConstants.secret,
                signOptions: { expiresIn: '8h' },
            }),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/user-service/src/main.ts":
/*!***************************************!*\
  !*** ./apps/user-service/src/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/user-service/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        yield app.enableCors();
        app.useGlobalPipes(new common_1.ValidationPipe());
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 8080;
        yield app.listen(port, () => {
            console.log('listening on port', port);
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./apps/user-service/src/main.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\avitta\user-service-monorepo\apps\user-service\src\main.ts */"./apps/user-service/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map