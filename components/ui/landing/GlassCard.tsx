"use client"
import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    motionProps?: MotionProps;
    className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', motionProps, ...rest }) => {
    return (
        <motion.div
            className={`glass-card p-6 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            {...motionProps}
            {...rest}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;