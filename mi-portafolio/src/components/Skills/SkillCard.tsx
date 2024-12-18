import { FC } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{skill.icon}</span>
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 dark:text-white">
            {skill.name}
          </h4>
          <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;