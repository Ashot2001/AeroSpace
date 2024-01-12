import Joi from 'joi';
import { ID } from './type';

const AboutSchema = {

  addBlok: {
    params:Joi.object({
      lang:Joi.string().valid('AM', 'US', 'RU').required(),
    }),
    body: Joi.object({
      name: Joi.string().min(2),
      image: Joi.string().min(2),
      text: Joi.string().min(2)
    })
  },

  delByIdSchema: {
    params: Joi.object({
      id: ID.required(),
      lang:Joi.string().valid('AM', 'US', 'RU').required(),
    })
  },

  editSchema: {
    params: Joi.object({
      id: ID.required(),
      lang:Joi.string().valid('AM', 'US', 'RU').required()
    }),
    body: Joi.object({
      title: Joi.string().min(2),
      image: Joi.string().min(2),
      text: Joi.string().min(2),
      more: Joi.string().min(1)

    })
  },

  getSchema: {
    params: Joi.object({
      lang: Joi.string().regex(/^(AM|US|RU)$/)
    })
  },




};
export default AboutSchema;
